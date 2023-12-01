import "./RecentOrdersTable.css"
import { FaSearch } from "react-icons/fa";
export default function RecentOrdersTable() {
    return(
        <div className="recent-orders-table">
            <div className="orders-header">
               <h1 className="table-Heading">Recent Orders</h1>
               <div className="search-input-container">
                <input type="search" placeholder="search order by order id"/>
                <FaSearch className="search-icon"/>
               </div>
               </div>
               <div className="table-body">
                <table >
                        <tr>
                            <th>Id</th>
                            <th>Customer Id</th>
                            <th>Order Id</th>
                            <th>Products</th>
                            <th>Ordered Date</th>
                            <th>Expected Delivery Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Address</th>
                        </tr>
                    
                     <tr>
                        <td>1</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td className="products"><span>1 &#10005; iphone 15 pro</span>
                        <span>2 &#10005; iphone 15 pro max</span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td><select value="Returned" className="status delivered">
                            <option  value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered
                            </option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                            </select></td>
                        <td><strong>&#8377; 1200</strong></td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td className="products"><span>1 &#10005; iphone 15 pro</span>
                        <span>2 &#10005; iphone 15 pro max</span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td><select value="Returned" className="status delivered">
                            <option  value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered
                            </option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                            </select></td>
                            
                        <td><strong>&#8377; 1200</strong></td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td className="products"><span>1 &#10005; iphone 15 pro</span>
                        <span>2 &#10005; iphone 15 pro max</span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td><select value="Returned" className="status delivered">
                            <option  value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered
                            </option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                            </select></td>
                        <td><strong>&#8377; 1200</strong></td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>  
                        {/* <tr>
                        <td>2</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td ><span className="products"><span>1 &#10005; iphone 15 pro</span>
                        <span>2 &#10005; iphone 15 pro max</span></span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td><select value="Returned" className="status delivered">
                            <option  value="Ordered">Ordered</option>
                            <option value="Delivered">Delivered
                            </option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Returned">Returned</option>
                            </select></td>
                            <td>&#8377; 1200</td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>  
                        <tr>
                        <td>3</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td ><span className="products"><span >1 &#10005; iphone 15 pro</span></span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td>Shipped</td>
                        <td>&#8377; 1200</td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>  
                        <tr>
                        <td>4</td>
                        <td>123456789</td>
                        <td>123456789123</td>
                        <td className="products"><span>1 &#10005; iphone 15 pro</span>
                        <span>2 &#10005; iphone 15 pro max</span>
                        <span>2 &#10005; iphone 15 pro max</span>
                        </td>
                        <td>22-07-2023</td>
                        <td>28-07-2023</td>
                        <td>Shipped</td>
                        <td>&#8377; 1200</td>
                        <td>2-71 mohammadnagar,nizamsagar,KamaReddy,Telangana-503302</td>
                        </tr>    */}
                </table>
               </div>
        </div>
    )
}