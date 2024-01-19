import "../Css/Nav.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { HiMenu,} from "react-icons/hi";
import Sidebar from "./Sidebar";
import Cookies from 'js-cookie';
function Nav({ location }) {
  const [sidebarOpen, setIsSidebarOpen] = useState(false);
  const email = atob(localStorage.getItem('AdminEmail'));
  const Navigate = useNavigate();

  

  const onClickLogo = () => {
    Navigate("/dashboard", { relative: true });
  };
  const handleLogOut = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    Navigate('/',{replace:"true"});
  };
  const handleAddAdmin = () => {
  Navigate(`/add-admin?pathname=${encodeURIComponent(location?.pathname)}`, {replace: true }); 
  }
  return (
    <div>
      <nav className="navbar" style={{ height: "10vh" }}>
        <i className="burger">
          <HiMenu
            className="ham-burger margin-logo"
            onClick={() => setIsSidebarOpen(!sidebarOpen)}
          />
        </i>
        <div style={{display:"flex", cursor:"pointer"}} onClick={onClickLogo} >
        <img
          alt="logo"
          src="https://actualize.co.in/wp-content/uploads/2023/05/Actualize-updated-logo.png"
          className="nav-logo" style={{marginRight:"6px"}}
        />
        <div>
          <p style={{color:"#ff0800", fontFamily:"sans-serif", fontSize:"20px", margin:"4px",fontWeight:"600px"}}>Order</p>
          <p style={{color:"#0066b2", fontFamily:"sans-serif", fontSize:"20px", margin:"4px",fontWeight:"600px"}}>Blitz</p>
        </div></div>
        <div className="menu menu-right iconHeader">
          <p style={{color:"#ffffff", fontSize:"24px",margin:"0"}}>{email[0].toUpperCase()}</p>
          <div className="dropdown-content">
          <p onClick={handleAddAdmin}>Add Admin</p>
          <p onClick={handleLogOut}>Log Out</p>
        </div>
        </div>
      </nav>
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default Nav;
