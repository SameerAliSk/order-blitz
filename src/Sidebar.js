/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrCubes } from "react-icons/gr";
import { MdOutlineInventory } from "react-icons/md";
function Sidebar({ sidebarOpen }) {
  return (
    <div
      className={sidebarOpen ? "nav-container" : "nav-container hide-sidebar"}
    >
      <div className="sidebar-items each-heading-container">
        <i>
          <LiaShippingFastSolid className="sidebar-icons" />
        </i>
        <h1 className="sidebar-heading">OrderBlitz</h1>
      </div>
      <a href="/" className="heading-container">
        <i>
          <MdOutlineDashboard className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Dashboard</h2>
      </a>
      <a href="/manage-orders" className="heading-container">
        <i>
          <GrCubes className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Manage orders</h2>
      </a>
      <a href="inventories" className="heading-container">
        <i>
          <MdOutlineInventory className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Inventories</h2>
      </a>
    </div>
  );
}
export default Sidebar;
