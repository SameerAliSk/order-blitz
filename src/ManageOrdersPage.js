import React, { useState } from 'react';
import ManageOrdersInfo from "./ManageOrdersInfo";
import Nav from "./Nav";
import ManageOrdersTable from "./ManageOrdersTable";
import Footer from './Footer';

export default function ManageOrdersPage() {
    const [orderStatusData, setOrderStatusData] = useState([0]);
    return(
        <>
        <Nav/>
        <ManageOrdersInfo orderStatusData = {orderStatusData} setOrderStatusData = {setOrderStatusData}/>
        <ManageOrdersTable setOrderStatusData = {setOrderStatusData}/>
        <Footer/>
        </>
    )
}