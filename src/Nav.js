import "./Nav.css";
import { useState } from "react";
import { HiMenu, HiOutlineUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";
function Nav() {
  const [sidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="navbar" style={{ height: "10vh" }}>
        <i className="burger">
          <HiMenu
            className="iconHeader margin-logo"
            onClick={() => setIsSidebarOpen(!sidebarOpen)}
          />
        </i>
        <img
          alt="logo"
          src="https://actualize.co.in/wp-content/uploads/2023/05/Actualize-updated-logo.png"
          className="nav-logo"
        />
        <div className="menu menu-right">
          <i>
            <HiOutlineUserCircle className="iconHeader margin" />
          </i>
        </div>
      </nav>
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default Nav;
