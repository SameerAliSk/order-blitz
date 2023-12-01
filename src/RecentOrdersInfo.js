import "./RecentOrdersInfo.css";
import { FaUsers } from "react-icons/fa";
import { FaChartSimple, FaCircleDollarToSlot } from "react-icons/fa6";
import { GrCubes } from "react-icons/gr";
export default function RecentOrdersInfo() {
  return (
    <div className="all-containers">
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Customers</h1>
          <i>
            <FaUsers className="info-icons" />
          </i>
        </div>
        <h3 className="info-answer">400</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Orders</h1>
          <i>
            <GrCubes className="info-icons" />
          </i>
        </div>
        <h3 className="info-answer">400</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Sales</h1>
          <i>
            <FaChartSimple className="info-icons" />
          </i>
        </div>
        <h3 className="info-answer">400</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Revenue</h1>
          <i>
            <FaCircleDollarToSlot className="info-icons" />
          </i>
        </div>
        <h3 className="info-answer">&#8377; 400</h3>
      </div>
    </div>
  );
}
