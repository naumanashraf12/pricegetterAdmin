import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import DatatableSeller from "../../components/datatable/DatatableSeller";

const SellerList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableSeller />
      </div>
    </div>
  );
};

export default SellerList;
