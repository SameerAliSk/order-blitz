import { useState, useEffect } from "react";
import "./InventoriesDetails.css";

export default function InventoriesDetails() {
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [mostSellingProducs, setMostSellingProducts] = useState([]);
  const [leastSellingProducts, setLeastSellingProducts] = useState([]);
  const [emergencyItemsList, setEmergencyItemsList] = useState([]);

  const inventoryDetails = [
    {
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/dashboard_7205329_obl9em.png",
      name: "Total Categories",
      count: categoriesCount,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/tags_2578920_hwious.png",
      name: "Total Brands",
      count: brandsCount,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/packaging_4213362_kgi5sn.png",
      name: "Total Products",
      count: productsCount,
    },
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
        fetchData("https://localhost:7234/api/Categories/categories-count", setCategoriesCount),
        fetchData("https://localhost:7234/api/Brands/brands-count", setBrandsCount),
        fetchData("https://localhost:7234/api/Products/products-count", setProductsCount),
        fetchData("https://localhost:7234/api/Products/top-three-most-selling-products", setMostSellingProducts),
        fetchData("https://localhost:7234/api/Products/top-three-least-selling-products", setLeastSellingProducts),
        fetchData("https://localhost:7234/api/Products/low-stock-products", setEmergencyItemsList),
      ]);
    };
    apiCalls();
  }, []);
  return (
    <div className="inventory-info-containers">
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Inventory Details</h1>
        {inventoryDetails.map((eachInventory) => (
          <div
            key={eachInventory.name}
            className="info-list"
            style={{ paddingBottom: "12px", paddingTop: "8px" }}
          >
            <div className="product-container">
              <img
                src={eachInventory.imageUrl}
                alt={eachInventory.name}
                className="inventory-icons"
              />
              <p className="product-text inventory-text">
                {eachInventory.name}
              </p>
            </div>
            <p className="product-text inventory-text">{eachInventory.count}</p>
          </div>
        ))}
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
