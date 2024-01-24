import "../Css/Order-Management/InventoriesTable.css";
import { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
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
  const downloadPdf = async () => {
    try {
        const response = await fetch(`https://localhost:7234/api/Categories/download-pdf/${categoryId}`);
        console.log(response)
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'products.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        console.error('Error downloading PDF:', error);
    }
};

  const getFilteredCategoryName = () => {
    const filteredCategory = allCategoryNames.find((category) => category.categoryId === categoryId);
    return filteredCategory ? filteredCategory.categoryName : "";
  };
  return (
    <>
      <div className="choose-category-container">
        <div className="category-selection-container">
          <h1 className="category-header">choose category</h1>
          <select value={categoryId} id="select" onChange={OnChangeCategory}>
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
          {categoryId && <div className="download-pdf-btn" onClick={downloadPdf}>
            <i><FaRegFilePdf style={{height:"25px", width:"30px"}} /></i>
            <p className="download-pdf-btn-text">DOWNLOAD PDF</p>
          </div>}
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
