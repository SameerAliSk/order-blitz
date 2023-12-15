import "./InventoriesTable.css";
import { useState, useEffect } from "react";
export default function InventoriesTable() {
  const [categoryId, setCategoryId] = useState("");
  const [allCategoryNames, setAllCategoryNames] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);

  useEffect(() => {
    const apiCalls = async () => {
      await fetch("https://localhost:7234/api/Categories/all-categories-names")
        .then((response) => response.json())
        .then((data) => setAllCategoryNames(data));
    };
    apiCalls();
  }, []);

  const OnChangeCategory = async (event) => {
    const selectedCategoryId = event.target.value;
    setCategoryId(selectedCategoryId);

    if (selectedCategoryId !== "") {
      try {
        const response = await fetch(
          `https://localhost:7234/api/Categories/${selectedCategoryId}`
        );

        if (response.status === 200) {
          const data = await response.json();
          setCategoryProducts(data);
          setDisplayErrorMsg(false);
        } else if (response.status === 204) {
          setDisplayErrorMsg(true);
        } else {
          console.error(
            "Error fetching category products. Status:",
            response.status
          );
          throw new Error("Failed to fetch category products");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  console.log(categoryProducts);
  return (
    <>
      <div className="category-selection-container">
        <h1 className="category-header">choose category</h1>

        <select value={categoryId} id="select" onChange={OnChangeCategory}>
          <option value={""}>----Select----</option>
          {allCategoryNames.map((eachCategory) => (
            <option value={eachCategory.categoryId}>
              {eachCategory.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div className="inventory-table">
        <div className="orders-header">
          <h1 className="table-Heading">All Inventory</h1>
        </div>
        {displayErrorMsg ? (
          <div className="inventory-error-msg">
            <p>Sorry, No products available in this category. 😔</p>
          </div>
        ) : (
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
              {categoryProducts.map((eachProduct, index) => (
                <tr key={eachProduct.productItemName}>
                  <td>{index + 1}</td>
                  <td>{eachProduct.productItemName}</td>
                  <td>{eachProduct.qtyInStock}</td>
                  <td>&#8377; {eachProduct.price}/-</td>
                  <td>{eachProduct.brand}</td>
                  <td>phones{eachProduct.categoryName}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
}
