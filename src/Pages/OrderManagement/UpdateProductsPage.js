import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import UpdateProductData from "../../Components/UpdateProductData";
import { useLocation } from 'react-router-dom';


export default function UpdateProductsPage() {
    const location = useLocation();
    return(
        <>
        <Nav location={location}/>
        <UpdateProductData/>
        <Footer/>
        </>
    )
}