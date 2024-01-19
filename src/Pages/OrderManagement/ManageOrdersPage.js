import React, { useState } from 'react';
import ManageOrdersInfo from "../../Components/ManageOrdersInfo";
import Nav from "../../Components/Nav";
import ManageOrdersTable from "../../Components/ManageOrdersTable";
import Footer from '../../Components/Footer';
import { useLocation } from 'react-router-dom';

export default function ManageOrdersPage() {
    const [orderStatusData, setOrderStatusData] = useState([0]);
    const location = useLocation();
    return(
        <>
        <Nav location={location}/>
        <ManageOrdersInfo orderStatusData = {orderStatusData} setOrderStatusData = {setOrderStatusData}/>
        <ManageOrdersTable setOrderStatusData = {setOrderStatusData}/>
        <Footer/>
        </>
    )
} 