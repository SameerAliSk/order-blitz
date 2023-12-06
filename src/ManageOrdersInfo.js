import "./ManageOrdersInfo.css";
import { useState,useEffect } from "react";
const iconData = ["https://res.cloudinary.com/dbatijrbu/image/upload/v1701504385/box_1524935_f2ofhx.png",
"https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/order_3500833_vkku5d.png", "https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/delivery-truck_5280282_krezun.png","https://res.cloudinary.com/dbatijrbu/image/upload/v1701503176/cancelled_5267928_v1imb3.png","https://res.cloudinary.com/dbatijrbu/image/upload/v1701503175/return-box_9561822_nezcss.png"]

export default function ManageOrdersInfo({orderStatusData,setOrderStatusData}) {
  const [orders, setOrders] = useState(0);
  
  
  useEffect(() => async() => {
    await fetch("https://localhost:7234/api/Orders/order-counts")
    .then(response => response.json())
    .then(data=>setOrderStatusData(data))
    
    await fetch('https://localhost:7234/api/Orders/total-orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  },[])
console.log(orderStatusData);
    return(
        <div className="all-containers">
      <div className="all-info-container each-info-container">
        <div className="info-container">
          <h1 className="order-info-heading">Total Orders</h1>
          <img src="https://res.cloudinary.com/dbatijrbu/image/upload/v1701504385/box_1524935_f2ofhx.png" alt = "total-orders" className="order-info-icons" />
        </div>
        <h3 className="info-answer">{orders}</h3>
      </div>
      {Object.entries(orderStatusData).map(([status,count],index) => (
      <div className="all-info-container each-info-container" key={status}>
        <div className="info-container">
          <h1 className="order-info-heading">{status}</h1>
            <img src={iconData[index]} alt = {status} className="order-info-icons" />
        </div>
        <h3 className="info-answer">{count}</h3>
      </div>))}
    </div>
    )
}