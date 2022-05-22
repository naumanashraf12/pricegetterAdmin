import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableSellerPending from "../../components/datatable/DatatableSellerPending";

const SellerListPending = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableSellerPending />
      </div>
    </div>
  );
};

export default SellerListPending;
