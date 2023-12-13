import "./InventoriesDetails.css";
export default function InventoriesDetails() {
  return (
    <div className="inventory-info-containers">
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Inventory Details</h1>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/dashboard_7205329_obl9em.png"
              alt="Total Categories"
              className="product-img"
            />
            <p className="product-text">Total Categories</p>
          </div>
          <p className="product-text">7</p>
        </div>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/tags_2578920_hwious.png"
              alt="Total Brands"
              className="product-img"
            />
            <p className="product-text">Total Brands</p>
          </div>
          <p className="product-text">10</p>
        </div>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1702446805/packaging_4213362_kgi5sn.png"
              alt="Total Products"
              className="product-img"
            />
            <p className="product-text">Total Products</p>
          </div>
          <p className="product-text">24</p>
        </div>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Top Selling Products</h1>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Least Selling Products</h1>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
        <div className="info-list">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
            alt="iphone 15 pro"
            className="product-img"
          />
          <p className="product-text">iphone 15 pro</p>
          <p className="product-text">&#8377;132000</p>
        </div>
      </div>
      <div className="inventory-info-each-container">
        <h1 className="info-heading">Emergency Required items Products</h1>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
              alt="iphone 15 pro"
              className="product-img"
            />
            <p className="product-text">iphone 15 pro</p>
          </div>
          <p className="product-text">13 Pcs Left</p>
        </div>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
              alt="iphone 15 pro"
              className="product-img"
            />
            <p className="product-text">iphone 15 pro</p>
          </div>
          <p className="product-text">13 Pcs Left</p>
        </div>
        <div className="info-list">
          <div className="product-container">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70"
              alt="iphone 15 pro"
              className="product-img"
            />
            <p className="product-text">iphone 15 pro</p>
          </div>
          <p className="product-text">13 Pcs Left</p>
        </div>
      </div>
      <div className="category-selection-container">
        <h1 className="category-header">choose category</h1>
        <select id="select">
          <option>----Select----</option>
          <option>Mobiles</option>
          <option>Electronics</option>
        </select>
      </div>
    </div>
  );
}
