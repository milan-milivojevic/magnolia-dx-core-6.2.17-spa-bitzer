import React, { useRef } from "react";
import { EditableArea } from "@magnolia/react-editor";
import "../css.css";
import LeftHandNav from "../components/navigation/LeftHandNav";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useHashScroll from "./useHashScroll";
import ClipLoader from "react-spinners/ClipLoader";

const ForwardedLeftHandNav = React.forwardRef(LeftHandNav);

function LoaderOverlay({ loading }) {
  if (!loading) return null;
  return (
    <div className="loader-overlay">
      <ClipLoader loading size={80} color="#3aaa35" cssOverride={{ borderWidth: "10px" }} />
    </div>
  );
}

function LeftHandNavigationPage({ title, bannerSection, mainSection }) {
  const contentRef = useRef(null);
  const loading = useHashScroll(contentRef, { offset: 250 });

  const isPagesApp = window.location.search.includes("mgnlPreview");
  const editMode = isPagesApp ? "editMode" : "";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {!editMode && <LoaderOverlay loading={loading} />}

      <div className="leftNavPage">
        <ForwardedLeftHandNav />
        <main
          className="rightMainContent"
          ref={contentRef}
          style={{ opacity: loading ? 0 : 1, transition: "opacity 0.2s" }}
        >
          <div className="bannerSection">
            {bannerSection && <EditableArea content={bannerSection} />}
          </div>
          {mainSection && <EditableArea content={mainSection} />}
        </main>
      </div>
    </HelmetProvider>
  );
}

export default LeftHandNavigationPage;
