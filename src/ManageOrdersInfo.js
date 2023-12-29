import "./ManageOrdersInfo.css";
import React, { useState, useEffect } from "react";
const iconData = [
  "https://res.cloudinary.com/dbatijrbu/image/upload/v1701503176/cancelled_5267928_v1imb3.png",
  "https://res.cloudinary.com/dy2gsniki/image/upload/v1702443691/deliveryman_2271106_d8ppni.png",
  "https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/order_3500833_vkku5d.png",
  "https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/return-box_9561822_nezcss.png",
  "https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/delivery-truck_5280282_krezun.png",
];

export default function ManageOrdersInfo({
  orderStatusData,
  setOrderStatusData,
}) {
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderCountsResponse = await fetch("https://localhost:7234/api/Orders/order-counts");
        const totalOrdersResponse = await fetch("https://localhost:7234/api/Orders/total-orders");

        if (!orderCountsResponse.ok || !totalOrdersResponse.ok) {
          throw new Error("Failed to fetch order counts");
        }

        const orderCountsData = await orderCountsResponse.json();
        const totalOrdersData = await totalOrdersResponse.json();

        setOrderStatusData(orderCountsData);
        setOrders(totalOrdersData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, [setOrderStatusData]);
  return (
    <div className="all-containers">
      <div className="manage-info-container">
        <div className="info-container">
          <h1 className="order-info-heading">Total Orders</h1>
          <h3 className="info-answer">{orders}</h3>
        </div>
        <img
          src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701504385/box_1524935_f2ofhx.png"
          alt="total-orders"
          className="order-info-icons"
        />
      </div>
      {Object.entries(orderStatusData).map(([status, count], index) => (
        <div className="manage-info-container" key={status}>
          <div className="info-container">
            <h1 className="order-info-heading">{status}</h1>
            <h3 className="info-answer">{count}</h3>
          </div>
          <img
            src={iconData[index]}
            alt={status}
            className="order-info-icons"
          />
        </div>
      ))}
    </div>
  );
}
