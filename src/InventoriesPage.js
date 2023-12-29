import InventoriesTable from "./InventoriesTable";
import InventoriesDetails from "./InventoriesDetails";
import Nav from "./Nav";
import Footer from "./Footer";

export default function InventoriesPage() {
  return (
    <>
      <Nav />
      <InventoriesDetails />
      <InventoriesTable/>
      <Footer/>
    </>
  );
}
