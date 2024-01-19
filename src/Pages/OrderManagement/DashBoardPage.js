
import DashBoard from "../../Components/DashBoard";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import { useLocation } from 'react-router-dom';


export default function DashBoardPage() {
    const location = useLocation();
    return(
        <div>
            <Nav location={location}/>
            <DashBoard/>
            <Footer/>
        </div>
    )
}