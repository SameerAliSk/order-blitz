import { useState, useEffect } from "react";
import "../Css/Order-Management/InventoriesDetails.css";

export default function InventoriesDetails() {
  const [mostSellingProducs, setMostSellingProducts] = useState([]);
  const [leastSellingProducts, setLeastSellingProducts] = useState([]);
  const [emergencyItemsList, setEmergencyItemsList] = useState([]);
  const [inventoryInfo,setInventoryInfo] = useState([])

  const inventoryDetails = [
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/dashboard_7205329_obl9em.png",
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/tags_2578920_hwious.png",
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/packaging_4213362_kgi5sn.png",
  ];
  
  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data with ${url}`);
      }
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching data with ${url}`, error);
    }
  };
  useEffect(() => {
    const apiCalls = async () => {
      await Promise.all([
        fetchData("https://localhost:7234/api/Categories/Inventory-Info", setInventoryInfo),
        fetchData("https://localhost:7234/api/Products/top-products?number=3&isLeastSelling=false", setMostSellingProducts),
        fetchData("https://localhost:7234/api/Products/top-products?number=3&isLeastSelling=true", setLeastSellingProducts),
        fetchData("https://localhost:7234/api/Products/low-stock-products", setEmergencyItemsList),
      ]);
    };
    apiCalls();
  }, []);
  return (
    <div className="inventory-info-containers">
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Inventory Details</h1>
        {Object.entries(inventoryInfo).map(([propertyName,value],index) =>
          <div
            key={propertyName}
            className="info-list"
            style={{ paddingBottom: "12px", paddingTop: "8px" }}
          >
            <div className="product-container">
              <img
                src={inventoryDetails[index]}
                alt={propertyName}
                className="inventory-icons"
              />
              <p className="product-text inventory-text">
                {propertyName}
              </p>
            </div>
            <p className="product-text inventory-text">{value}</p>
          </div>)}
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Top Selling Products</h1>
        {mostSellingProducs.map((eachProduct) => (
          <div className="info-list" key={eachProduct.productItemName}>
            <div className="product-container">
              <img
                src={eachProduct.productItemImage}
                alt={eachProduct.productItemName}
                className="product-img"
              />
              <p className="product-text">{eachProduct.productItemName}</p>
            </div>
            <p className="product-text">&#8377; {eachProduct.price}/-</p>
          </div>
        ))}
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Least Selling Products</h1>
        {leastSellingProducts.map((eachProduct) => (
          <div className="info-list" key={eachProduct.productItemImage}>
            <div className="product-container">
              <img
                src={eachProduct.productItemImage}
                alt={eachProduct.productItemName}
                className="product-img"
              />
              <p className="product-text">{eachProduct.productItemName}</p>
            </div>
            <p className="product-text">&#8377; {eachProduct.price}/-</p>
          </div>
        ))}
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Emergency Required items</h1>
        {emergencyItemsList.map((eachProduct) => (
          <div className="info-list" key={eachProduct.productItemImage}>
            <div className="product-container">
              <img
                src={eachProduct.productItemImage}
                alt={eachProduct.productItemName}
                className="product-img"
              />
              <p className="product-text">{eachProduct.productItemName}</p>
            </div>
            <p className="product-text">{eachProduct.qtyInStock} Pcs Left</p>
          </div>
        ))}
      </div>
    </div>
  );
}
