import "./InventoriesTable.css";
export default function InventoriesTable() {
  return (
    <div className="inventory-table">
      <div className="orders-header">
        <h1 className="table-Heading">All Inventory</h1>
      </div>
      <div className="inventory-error-msg">
        <p>Sorry, No products available in this category. 😔</p>
      </div>
      <div className="table-body">
        <table>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Qty in stock</th>
            <th>Price</th>
            <th>Brand Name</th>
            <th>Category Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>iphone 15 pro</td>
            <td>10</td>
            <td>129000</td>
            <td>apple</td>
            <td>phones</td>
          </tr>
          <tr>
            <td>2</td>
            <td>iphone 15 pro max</td>
            <td>12</td>
            <td>159000</td>
            <td>apple</td>
            <td>phones</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
