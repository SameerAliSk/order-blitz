import { useState, useEffect } from "react";
import "./RecentOrdersInfo.css";
export default function RecentOrdersInfo() {
  const [orders, setOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [sales, setSales] = useState(0);

  useEffect(() => {
    const ordersInfo = async () => {
      await fetch("https://localhost:7234/api/Customers/total-customers")
        .then((response) => response.json())
        .then((data) => setCustomers(data));

      await fetch("https://localhost:7234/api/Orders/total-orders")
        .then((response) => response.json())
        .then((data) => setOrders(data));

      await fetch("https://localhost:7234/api/Orders/total-sales")
        .then((response) => response.json())
        .then((data) => setSales(data));

      await fetch("https://localhost:7234/api/Orders/total-revenue")
        .then((response) => response.json())
        .then((data) => setRevenue(data));
    };
    ordersInfo();
  }, []);

  return (
    <div className="all-containers">
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Customers</h1>
          <img
            src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701689454/service_9119160_luxciw.png"
            alt="Total Orders"
            className="info-icons"
          />
        </div>
        <h3 className="info-answer">{customers}</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Orders</h1>
          <img
            src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701504385/box_1524935_f2ofhx.png"
            alt="Total Customers"
            className="info-icons"
          />
        </div>
        <h3 className="info-answer">{orders}</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Sales</h1>
          <img
            src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701689454/sale_5661388_zjowna.png"
            alt="Total Sales"
            className="info-icons"
          />
        </div>
        <h3 className="info-answer">{sales}</h3>
      </div>
      <div className="all-info-container large-devices-container md-devices-container small-devices-container">
        <div className="info-container">
          <h1 className="info-heading ">Total Revenue</h1>
          <img
            src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701689454/revenue_9926769_bcxvs8.png"
            alt="Total Revenue"
            className="info-icons"
          />
        </div>
        <h3 className="info-answer">&#8377; {revenue}</h3>
      </div>
    </div>
  );
}
