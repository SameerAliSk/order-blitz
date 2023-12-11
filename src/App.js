import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import ManageOrdersPage from "./ManageOrdersPage";
import DashBoardPage from "./DashBoardPage";
import InventoriesPage from "./InventoriesPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/manage-orders" element={<ManageOrdersPage />} />
          <Route exact path="/dashboard" element={<DashBoardPage />} />
          <Route exact path="/inventories" element={<InventoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
