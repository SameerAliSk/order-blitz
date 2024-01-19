import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ManageOrdersPage from "./Pages/OrderManagement/ManageOrdersPage";
import DashBoardPage from "./Pages/OrderManagement/DashBoardPage";
import InventoriesPage from "./Pages/OrderManagement/InventoriesPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import ForgotPasswordPage from "./Pages/Authentication/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Authentication/ResetPasswordPage";
import SignUpPage from "./Pages/Authentication/SignUpPage";
import UpdateProductsPage from "./Pages/OrderManagement/UpdateProductsPage";
import {AuthenticatedRoutes,AuthorizedRoutes} from "./Components/AuthenticatedAndAuthorizedRoutes";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<LoginPage/>}/>
          <Route  path="/forgot-password" element={<ForgotPasswordPage/>}/>
          <Route  path="/reset-password" element={<ResetPasswordPage/>}/>
          <Route  path="/add-admin" element={(<AuthenticatedRoutes><SignUpPage/></AuthenticatedRoutes>)}/>
          <Route  path="/dashboard" element={(<AuthenticatedRoutes><AuthorizedRoutes userRole="Admin"><DashBoardPage /></AuthorizedRoutes></AuthenticatedRoutes>)} />
          <Route  path="/manage-orders" element={(<AuthenticatedRoutes><AuthorizedRoutes userRole="Admin"><ManageOrdersPage /></AuthorizedRoutes></AuthenticatedRoutes>)} />
          <Route  path="/inventories" element={(<AuthenticatedRoutes><AuthorizedRoutes userRole="Admin"><InventoriesPage /></AuthorizedRoutes></AuthenticatedRoutes>)} />
          <Route  path="/update-products-data" element= {(<AuthenticatedRoutes><AuthorizedRoutes userRole="Admin"><UpdateProductsPage/></AuthorizedRoutes></AuthenticatedRoutes>)}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
