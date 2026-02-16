import React from "react";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { aclCheck } from '../../helpers/ACL';

import {events, getRouterBasename} from "../../helpers/AppHelpers";

function MenuItem({item, itemIndex, depthLevel}) {    

  const [aclValue, setAclValue] = useState(false);
  const basicAclCheck = item.allowedGroups.length === 0 && item.deniedGroups.length === 0 && (item.hideComponent === false || item.hideComponent === "false");
  
  const isPagesApp = window.location.search.includes("mgnlPreview");
  const editMode = isPagesApp ? true : false;

  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
        }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
      window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
      window.innerWidth > 960 && setDropdown(false);
  };

  useEffect(() => {
    if (editMode === false && basicAclCheck === false) {
      aclCheck(item.allowedGroups, item.deniedGroupsdeniedGroups, item.hideComponent)
        .then((response) => {
          setAclValue(response); 
        })
        .catch((error) => {
          console.error("Greška prilikom izvršavanja aclCheck:", error);
          setAclValue(false);
        });
    } else setAclValue(true);
  });

  if (editMode === false && aclValue === false && basicAclCheck === false) {
    return null;
  } 

  if (item.hide !== ("true" || true)) {
    return (
      <li className={`menu-item level-${depthLevel} hideInNav-${item.hide}`}
          ref={ref}
          // Uncomment 2 lines below if you want to open levels on hover
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} 
      >
      { item.children && item.children.length !== 0 && item.name !== "Welcome" ? ( 
            <React.Fragment>
              <button type="button" aria-haspopup = "menu" aria-expanded = {dropdown ? "true" : "false"}
                onClick = {
                  () => setDropdown((prev) => !prev)
                } >
                <a href={(getRouterBasename() + item.path.replace(process.env.REACT_APP_MGNL_APP_BASE, "")).replace("//", "/")} 
                  key={item.id} 
                  className={itemIndex === 0 ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", e.currentTarget.href);
                    window.scrollTo(0, 0);
                    events.emit("popstate");
                  }}
                >  
                  {item.name}
                  {" "} 
                  {/* {depthLevel > 0 ? < span > &raquo; </span> : <span className="arrow" />}  */}
                </a>            
              </button> 
              <Dropdown depthLevel={depthLevel}
                        submenus={item.children}
                        dropdown={dropdown}
              /> 
            </React.Fragment>
          ) :  ( 
            <button type="button">
              <a href={(getRouterBasename() + item.path.replace(process.env.REACT_APP_MGNL_APP_BASE, "")).replace("//", "/")}
                key={item.id} 
                className={itemIndex === 0 ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", e.currentTarget.href);
                  window.scrollTo(0, 0);
                  events.emit("popstate");
                }}
              >  
                {item.name} 
              </a>
            </button>
          )
      } 
      </li>
    )
  } 
  else { 
      return null ;
    }
  };

export default MenuItem;