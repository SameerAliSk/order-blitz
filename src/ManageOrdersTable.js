import "./ManageOrdersTable.css"
import { useState,useEffect,useCallback } from "react";
import { FaSearch } from "react-icons/fa";

export default function ManageOrdersTable({setOrderStatusData}) {
  const [allOrders, setAllOrders] = useState([]);
  const [userSearchId, setUserSearchId] = useState("");
  const [orderNotFound, setOrderNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (userSearchId === "") {
        fetchOrders();
        return;
      }
      onClickSearchId();
    }
  };

  const searchInputChangeHandler = async(event) => {
    const userId = event.target.value;
    if (userId === "") {
      await fetchOrders();
    }
    setUserSearchId(userId);
  };
      
  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://localhost:7234/api/Orders/all-orders");
      const data = await response.json();
      setAllOrders(data);
      setOrderNotFound(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    if (userSearchId === "") {
      fetchOrders();
    }
  }, [userSearchId, fetchOrders]);  

  const onClickSearchId = async () => {
    try {
      const searchResult = await fetch(`https://localhost:7234/api/Orders/${userSearchId}`);

      if (searchResult.status === 200) {
        const singleOrder = await searchResult.json();
        setAllOrders([singleOrder]);
        setOrderNotFound(false);
      } else {
        setOrderNotFound(true);
      }
    } catch (error) {
      console.error("Error searching for order:", error);
    }
  };
  const updateOrderStatus = async (value, orderId) => {
    const orderStatusDetails = {
      orderStatus: value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderStatusDetails),
    };

    try {
      await fetch(`https://localhost:7234/api/Orders/update-order-status/${orderId}`, options);
      const updatedData = await fetch("https://localhost:7234/api/Orders/all-orders").then((response) => response.json());
      setAllOrders(updatedData);

      const updatedOrderStatusData = await fetch("https://localhost:7234/api/Orders/order-counts").then((response) => response.json());
      setOrderStatusData(updatedOrderStatusData);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
     
    return(
        <div className="manage-orders-table">
            <div className="orders-header">
               <h1 className="table-Heading">All Orders</h1>
               <div className="search-input-container">
                <input value={userSearchId} type="search" placeholder="search order by order id" onChange={searchInputChangeHandler} onKeyPress={handleKeyPress}/>
                <FaSearch style={{cursor:"pointer"}} className="search-icon" onClick={onClickSearchId}/>
               </div>
               </div>
               {orderNotFound ?
               (<div className="order-not-found">
                <p>Sorry, we couldn't find an order with that ID. 😕</p>
                <p>Please check the order ID and try again. 🕵️‍♂️</p>
                </div>):
               (<div className="table-body">
                {loading ? <p>Loading...</p>:(
                <table>
                  <thead>
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
                        </tr></thead>
                        <tbody>
                    {allOrders.map((eachOrderData,index) =>(
                     <tr key ={eachOrderData.orderId}>
                        <td>{index+1}</td>
                        <td>{eachOrderData.deliveryAddress.split('\n')[0]}</td>
                        <td>{eachOrderData.orderId}</td>
                        <td className="products">{eachOrderData.products.map(eachProduct => <span key={eachProduct.name}>{eachProduct.quantity} &#10005; {eachProduct.name} </span>)}
                        </td>
                        <td>{eachOrderData.orderDate}</td>
                        <td>{eachOrderData.expectedDeliveryDate}</td>
                        <td><select value={eachOrderData.orderStatus}
                         onChange={(e)=>updateOrderStatus(e.target.value,eachOrderData.orderId)}
                          className={`status ${eachOrderData.orderStatus}`}>
                            <option  value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered
                            </option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                            <option value = "Shipped">Shipped</option>
                            </select></td>
                        <td style={{width:"80px"}}><strong>&#8377; {eachOrderData.totalOrderAmount}</strong></td>
                        <td>{eachOrderData.deliveryAddress}</td>
                        </tr>))}</tbody>
                </table>)}
               </div>) }
        </div>
    )
}