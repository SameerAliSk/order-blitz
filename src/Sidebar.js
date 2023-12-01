/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrCubes } from "react-icons/gr";
import { MdOutlineInventory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
function Sidebar({ sidebarOpen }) {
  const [dropDownIcon, setIsDropDownIcon] = useState(false);

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
      <a href="#dashboard" className="heading-container">
        <i>
          <MdOutlineDashboard className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Dashboard</h2>
      </a>
      <a href="#mange-orders" className="heading-container">
        <i>
          <GrCubes className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Mange orders</h2>
      </a>
      <a href="inventories" className="heading-container">
        <i>
          <MdOutlineInventory className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Inventories</h2>
      </a>
      <a href="categories" className="heading-container">
        <i>
          <BiCategory className="sidebar-icon" />
        </i>
        <h2 className="side-heading">Choose Category</h2>
        <i onClick={() => setIsDropDownIcon(!dropDownIcon)}>
          {dropDownIcon ? (
            <FaAngleDown className="scroll-bar" />
          ) : (
            <FaAngleRight className="scroll-bar" />
          )}
        </i>
      </a>
      {dropDownIcon ? (
        <ul>
          <li>Electronics</li>
          <li>Appliances</li>
          <li>Mobiles</li>
          <li>Fashion</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
export default Sidebar;
