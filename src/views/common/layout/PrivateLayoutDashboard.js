import SideMenu from "components/side-menu/SideMenu";
import { Outlet } from "react-router-dom";
import logoAnicia from '../../../assets/images/logoAnicia.png';

const PrivateLayoutDashboard = () => {

 // const isOpen = useSelector((state) => state.layout.sidebarIsOpen);

 const containerStyles = {
  display: "flex",
  flexDirection: "column", // Cambia la dirección a columna
  height: "100vh", // Establece la altura al 100% de la ventana
};

const contentContainerStyles = {
  display: "flex",
  width: "100%",
};

const logoContainerStyles = {
};
  return (
    <div className="board" style={containerStyles}>
      <div tyle={logoContainerStyles} className="logo-container">
      <img src={logoAnicia} alt="Logo de la aplicación" className="logo" />
      </div>
      <div style={contentContainerStyles}>
        <SideMenu isOpen={true}/>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayoutDashboard;
