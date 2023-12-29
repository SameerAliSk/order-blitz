import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ManageOrdersPage from "./ManageOrdersPage";
import DashBoardPage from "./DashBoardPage";
import InventoriesPage from "./InventoriesPage";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
import UpdateProductsPage from "./UpdateProductsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
          <Route exact path="/reset-password" element={<ResetPassword/>}/>
          <Route exact path="/sign-up" element={<SignUp/>}/>
          <Route exact path="/dashboard" element={<DashBoardPage />} />
          <Route exact path="/manage-orders" element={<ManageOrdersPage />} />
          <Route exact path="/inventories" element={<InventoriesPage />} />
          <Route exact path="/update-products-data" element= {<UpdateProductsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
