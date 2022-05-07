import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import MobileNav from "../MobileNav";

import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <MobileNav />

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
