import EdoCase from "views/EdoCase";
import SideMenu from "./SideMenu";
import TopNavBar from "./TopNavBar";

const MainLayout = () => {
  return (
    <>
      <TopNavBar />
      <div style={{ height: "100%", width: "100%", paddingTop: "90px" }}>
        <div style={{ display: "flex" }}>
          <SideMenu />
          <EdoCase />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
