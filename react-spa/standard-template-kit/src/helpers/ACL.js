export async function aclCheck(
  allowedGroups = [],
  deniedGroups = [],
  hideComponent = false
) {
  // Ako odmah znamo da je hideComponent true, nema potrebe za daljom logikom.
  if (hideComponent === true || hideComponent === "true") {
    return false;
  }

  // Ako ni allowedGroups ni deniedGroups nisu prosleđeni, uvek prikazujemo.
  if (allowedGroups.length === 0 && deniedGroups.length === 0) {
    return true;
  }

  const baseUrl = process.env.REACT_APP_MGNL_APP_HOST

  // 1. Povlačenje informacija o korisniku iz dva kraja:
  const [currentUserResponse, ssoUserResponse] = await Promise.all([
    fetch(`${baseUrl}/rest/administration/users/current`).then((res) => res.json()),
    fetch(`${baseUrl}/rest/sso/users/current`).then((res) => res.json()),
  ]);

  // 2. Formiramo nazive grupa (puteve) u kojima se korisnik nalazi
  const orgUnitName = "/BM_" + currentUserResponse.orgUnitName; // npr. "/BM_BrandMaker"
  const vdbGroupName = "/VDBG_" + ssoUserResponse.vdbGroupName; // npr. "/VDBG_Standard"

  // 2a. Od roles objekta pravimo niz rola sa prefiksom "/BM_"
  // primer: roles: { PIMEDIA_DATABASE: "administrator", CI_PORTAL: "Administrator" }
  // postaje: ["/BM_PIMEDIA_DATABASE_administrator", "/BM_CI_PORTAL_Administrator"]
  const { roles = {} } = currentUserResponse;
  const userRoles = Object.entries(roles).map(([key, value]) => `/BM_${key}_${value}`);

  // 3. Spajamo korisničke grupe i role u jedan niz
  const userGroups = [orgUnitName, vdbGroupName];
  const userAccess = [...userGroups, ...userRoles];

  // 4. Jednostavna logika za odobravanje / odbijanje

  // Da li je korisnik u nekoj od dopuštenih?
  const isInAllowed = userAccess.some((item) => allowedGroups.includes(item));
  // Da li je korisnik u nekoj zabranjenoj?
  const isInDenied = userAccess.some((item) => deniedGroups.includes(item));

  // Ako je korisnik u nekoj denied grupi/roli, a nije ni u jednoj allowed, blokiraj.
  if (isInDenied && !isInAllowed) {
    return false;
  }

  // Ako postoje allowedGroups, a korisnik nije ni u jednoj od njih – blokiraj.
  if (allowedGroups.length > 0 && !isInAllowed) {
    return false;
  }

  // U svim ostalim slučajevima dozvoli prikaz.
  return true;
}
