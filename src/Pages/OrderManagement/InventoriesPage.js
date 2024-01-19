import InventoriesTable from "../../Components/InventoriesTable";
import InventoriesDetails from "../../Components/InventoriesDetails";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import { useLocation } from 'react-router-dom';

export default function InventoriesPage() {
  const location = useLocation();
  return (
    <>
      <Nav location={location}/>
      <InventoriesDetails />
      <InventoriesTable/>
      <Footer/>
    </>
  );
}
