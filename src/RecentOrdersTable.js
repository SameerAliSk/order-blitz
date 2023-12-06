import "./RecentOrdersTable.css";
import { useState,useEffect } from "react";
export default function RecentOrdersTable() {
    const [recentOrdersData, setRecentOrdersData] = useState([]);
    useEffect(()=> {const recentOrdersTableInfo = async() => {

    await fetch('https://localhost:7234/api/Orders/recent-orders')
      .then(response => response.json())
      .then(data => setRecentOrdersData(data));
    }
    console.log(recentOrdersData);
    recentOrdersTableInfo()},[])
    return(
        <div className="recent-orders-table">
            <div className="orders-header">
               <h1 className="table-Heading">Recent Orders</h1>
               </div>
               <div className="table-body">
                <table >
                        <tr>
                            <th>Id</th>
                            <th>Customer Name</th>
                            <th>Order Id</th>
                            <th>Products</th>
                            <th>Ordered Date</th>
                            <th>Expected Delivery Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Address</th>
                        </tr>
                  {recentOrdersData.map((eachOrderData,index) => (
                     <tr key ={eachOrderData.orderId} >
                        <td>{index+1}</td>
                        <td>{eachOrderData.deliveryAddress.split('\n')[0]}</td>
                        <td>{eachOrderData.orderId}</td>
                        <td className="products">
                            {eachOrderData.products.map(eachProduct => <span>{eachProduct.quantity} &#10005; {eachProduct.name} </span>)}
                        </td>
                        <td>{eachOrderData.orderDate}</td>
                        <td>{eachOrderData.expectedDeliveryDate}</td>
                        <td > <span style={{padding:"5px 10px"}} className={`status status-padding ${eachOrderData.orderStatus}`}>{eachOrderData.orderStatus}</span></td>
                        <td style={{width:"80px"}}><strong>&#8377; {eachOrderData.totalOrderAmount}</strong></td>
                        <td>{eachOrderData.deliveryAddress}</td>
                        </tr> 
                        ))}
                </table>
               </div>
        </div>
    )
}