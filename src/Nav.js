import "./Nav.css";
import { useState } from "react";
import { HiMenu, HiOutlineUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";
function Nav() {
  const [sidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="navbar" style={{height:"10vh"}}>
        <i className="burger">
          <HiMenu
            className="iconHeader margin-logo"
            onClick={() => setIsSidebarOpen(!sidebarOpen)}
          />
        </i>
        <img
          alt="logo"
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1701250363/_697d4042-08bb-4927-b82c-8785b500de4c-removebg-preview_y9hbou.png"
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
