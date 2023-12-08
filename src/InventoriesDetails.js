import "./InventoriesDetails.css";
export default function InventoriesDetails() {
  return (
    <div className="inventory-info-containers">
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Inventory Details</h1>
        <div className="each-info-container">
          <h3 className="property-header">Total Categories</h3>
          <p className="property-header">7</p>
        </div>
        <div className="each-info-container">
          <h3 className="property-header">Total Brands</h3>
          <p className="property-header">10</p>
        </div>
        <div className="each-info-container">
          <h3 className="property-header">Total Products</h3>
          <p className="property-header">24</p>
        </div>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Top Selling Products</h1>
        <ul className="info-list">
          <li>iphone 15 pro</li>
          <li>samsung s22</li>
          <li>Samsung s22 ultra</li>
        </ul>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Least Selling Products</h1>
        <ul className="info-list">
          <li>iphone 15 pro</li>
          <li>samsung s22</li>
          <li>Samsung s22 ultra</li>
        </ul>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Emergency Required items Products</h1>
        <div className="each-info-container">
          <h3 className="property-header">Total Brands</h3>
          <p className="property-header">10</p>
        </div>
      </div>
    </div>
  );
}
