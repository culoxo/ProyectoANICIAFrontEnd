import CasesIcon from "assets/dynamic-icons/CasesIcon";
import HospitalIcon from "assets/dynamic-icons/HospitalIcon";
import { useState } from "react";
import {
  Nav,
  NavItem
} from "reactstrap";
import styles from "./SideMenu.module.css";

import { Link, NavLink, useLocation } from "react-router-dom";

const SideMenu = ({ isOpen, usuarioRegistrado }) => {
  const [open, setOpen] = useState("");
  const [openSub, setOpenSub] = useState("");

  const [selectedSection, setSelectedSection] = useState(1);
  const [selectedSubSection, setSelectedSubSection] = useState();
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const toggleSub = (id) => {
    if (openSub === id) {
      setOpenSub();
    } else {
      setOpenSub(id);
    }
  };

  const isSideItemCurrentlyEnabled = (booleanResult) => {
    if (booleanResult) {
      return "#1D527E";
    }

    return "white";
  };

  return (
    <div
      hidden={isLogin}
      style={{
        transition: "width 1s ease",
        width: !isOpen ? "0px" : "212px",
      }}
    >
      <Nav vertical className={styles.sideMenu}>
        <NavItem className={styles.sideMenuItem}>
          <NavLink
            href="#"
            className={`d-flex align-items-center ${selectedSection === 1 && styles.activeSection
              }`}
            onClick={() => {
              setSelectedSubSection();
              setSelectedSection(1);
            }}
          >
            <HospitalIcon
              className={selectedSection === 1 && styles.activeIcon}
              fill={isSideItemCurrentlyEnabled(selectedSection === 1)}
              size="30"
            />
            <span className="ms-2 ">Inicio</span>
          </NavLink>
        </NavItem>
          < NavItem className={styles.sideMenuItem}>
                  <CasesIcon
                    className={selectedSection === 2 ? styles.activeIcon : ""}
                    fill={selectedSection === 2 ? "#1D527E" : "white"}
                    size="30"
                  />
                  <Link className = "ms-3"to="/clientes">
                    <span>Clientes</span>
                  </Link>
          </NavItem>
          < NavItem className={styles.sideMenuItem}>
                  <CasesIcon
                    className={selectedSection === 2 ? styles.activeIcon : ""}
                    fill={selectedSection === 2 ? "#1D527E" : "white"}
                    size="30"
                  />
                  <Link className = "ms-3"to="/servicios">
                    <span>Servicios</span>
                  </Link>
          </NavItem>

{usuarioRegistrado && usuarioRegistrado.admin && (

          < NavItem className={styles.sideMenuItem}>
                  <CasesIcon
                    className={selectedSection === 2 ? styles.activeIcon : ""}
                    fill={selectedSection === 2 ? "#1D527E" : "white"}
                    size="30"
                  />
                  <Link className = "ms-3"to="/usuarios">
                    <span>Usuarios</span>
                  </Link>
          </NavItem>
          
)}
          
          < NavItem className={styles.sideMenuItem}>
                  <CasesIcon
                    className={selectedSection === 2 ? styles.activeIcon : ""}
                    fill={selectedSection === 2 ? "#1D527E" : "white"}
                    size="30"
                  />
                  <Link className = "ms-3"to="/factura">
                    <span>Facturas</span>
                  </Link>
          </NavItem>
      </Nav>
    </div >
  );
};

export default SideMenu;
