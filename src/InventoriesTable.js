import "./InventoriesTable.css";
import { useState, useEffect } from "react";
export default function InventoriesTable() {
  const [categoryId, setCategoryId] = useState("");
  const [allCategoryNames, setAllCategoryNames] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false);
  const [isCategoryIdNull,setIsCategoryIdNull] = useState(true);

  useEffect(() => {
    const fetchCategoryNames = async () => {
      try {
        const response = await fetch("https://localhost:7234/api/Categories/all-categories-names");
        if (response.ok) {
          const data = await response.json();
          setAllCategoryNames(data);
        } else {
          throw new Error("Failed to fetch category names");
        }
      } catch (error) {
        console.error("Error fetching category names:", error);
      }
    };
    fetchCategoryNames();
  }, []);

  const OnChangeCategory = async (event) => {
    const selectedCategoryId = event.target.value;
    setCategoryId(selectedCategoryId);

    if (selectedCategoryId !== "") {
      setIsCategoryIdNull(false);
      try {
        const response = await fetch(
          `https://localhost:7234/api/Categories/${selectedCategoryId}`
        );
        console.log("Response status:", response.status);

        if (response.status === 200) {
          const data = await response.json();
          setCategoryProducts(data);
          setDisplayErrorMsg(false);
        } else if (response.status === 204) {
          setDisplayErrorMsg(true);
        } else {
          
          throw new Error("Failed to fetch category products");
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    } else {
      setIsCategoryIdNull(true);
    }
  };

  const getFilteredCategoryName = () => {
    const filteredCategory = allCategoryNames.find((category) => category.categoryId === categoryId);
    return filteredCategory ? filteredCategory.categoryName : "";
  };
  const syncDataFromExcel = async () => {
    try {
      const response = await fetch(
        "https://localhost:7234/api/Products/sync-from-excel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sync from Excel");
      }
      await handleCategoryChange({ target: { value: categoryId } });
    } catch (error) {
      console.error("Error syncing from Excel:", error);
    }
  };
  return (
    <>
      <div className="choose-category-container">
        <div className="category-selection-container">
          <h1 className="category-header">choose category</h1>
          <select value={categoryId} id="select" onChange={handleCategoryChange}>
            <option value={""}>----Select----</option>
            {allCategoryNames.map((eachCategory) => (
              <option
                value={eachCategory.categoryId}
                key={eachCategory.categoryId}
              >
                {eachCategory.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="inventory-table">
        <div className="orders-header">
          <h1 className="table-Heading">
            {getFilteredCategoryName()} Inventory
          </h1>
          <button className="update-data-btn" onClick={syncDataFromExcel}>
            Update Product Data
          </button>
        </div>
        {(displayErrorMsg || isCategoryIdNull) ? (
          <div className="inventory-error-msg">
            <p>{isCategoryIdNull ? "Please choose a category to view its inventory 📦" :" Sorry, No products available in this category. 😔"}</p>
          </div>
        ) : (
          <div className="table-body">
            <table>
              <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Qty in stock</th>
                <th>Price</th>
                <th>Brand Name</th>
                <th>Category Name</th>
              </tr></thead>
              <tbody>
              {categoryProducts.map((eachProduct, index) => (
                <tr key={eachProduct.productItemName}>
                  <td>{index + 1}</td>
                  <td>{eachProduct.productItemName}</td>
                  <td>{eachProduct.qtyInStock}</td>
                  <td>&#8377; {eachProduct.price}/-</td>
                  <td>{eachProduct.brand}</td>
                  <td>{eachProduct.categoryName}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
