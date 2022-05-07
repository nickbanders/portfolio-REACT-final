import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <MobileNav />
      <Footer />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
