import React from "react";
import { useSelector } from "react-redux";
import SideMenu from "components/side-menu/SideMenu";
import { Outlet } from "react-router-dom";
import Login from '../../admin-users/Login'

const PrivateLayoutDashboard = () => {

 // const isOpen = useSelector((state) => state.layout.sidebarIsOpen);

  return (
    <div className="board" style={{ display: "flex"}}>
      <div style={{ display: "flex", width: "100%" }}>
        <SideMenu isOpen={true}/>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayoutDashboard;
