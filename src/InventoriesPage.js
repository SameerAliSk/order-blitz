import InventoriesTable from "./InventoriesTable";
import InventoriesDetails from "./InventoriesDetails";
import Nav from "./Nav";

export default function InventoriesPage() {
  return (
    <div>
      <Nav />
      <InventoriesDetails />
      <InventoriesTable/>
    </div>
  );
}
