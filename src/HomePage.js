import Nav from "./Nav";
import RecentOrdersInfo from "./RecentOrdersInfo";
import RecentOrdersTable from "./RecentOrdersTable";
function HomePage() {
  return (
    <div>
      <Nav />
      <RecentOrdersInfo />
      <RecentOrdersTable />
    </div>
  );
}

export default HomePage;
