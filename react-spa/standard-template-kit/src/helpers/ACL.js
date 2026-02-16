export async function aclCheck(
  allowedGroups = [],
  deniedGroups = [],
  hideComponent = false
) {
  if (hideComponent === true || hideComponent === "true") {
    return false;
  }

  if (allowedGroups.length === 0 && deniedGroups.length === 0) {
    return true;
  }

  const baseUrl = process.env.REACT_APP_MGNL_APP_HOST

  const [currentUserResponse, ssoUserResponse] = await Promise.all([
    fetch(`${baseUrl}/rest/administration/users/current`).then((res) => res.json()),
    fetch(`${baseUrl}/rest/sso/users/current`).then((res) => res.json()),
  ]);

  const orgUnitName = "/BM_" + currentUserResponse.orgUnitName;
  const vdbGroupName = "/VDBG_" + ssoUserResponse.vdbGroupName;

  const { roles = {} } = currentUserResponse;
  const userRoles = Object.entries(roles).map(([key, value]) => `/BM_${key}_${value}`);

  const userGroups = [orgUnitName, vdbGroupName];
  const userAccess = [...userGroups, ...userRoles];

  const isInAllowed = userAccess.some((item) => allowedGroups.includes(item));
  const isInDenied = userAccess.some((item) => deniedGroups.includes(item));

  if (isInDenied && !isInAllowed) {
    return false;
  }

  if (allowedGroups.length > 0 && !isInAllowed) {
    return false;
  }

  return true;
}
