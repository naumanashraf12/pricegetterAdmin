import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { totalProducts, totalUsers } from "../../store/api";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const tokens = localStorage.getItem("token");
  const [token, setToken] = useState(tokens);
  const [totalUser, setUsers] = useState({});
  const [totalProduct, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { isAuth, token: tk, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (tokens === undefined) {
      navigate("/");
    }
    totalUsers().then((res) => {
      setUsers({ ...res.data.data });
      setLoading(false);
    });
    totalProducts().then((res) => {
      setProducts(res.data.data);
    });
  }, [token]);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="widgets">
                <Widget
                  title="Users"
                  n={totalUser.userCount}
                  link="view all Users"
                  to="/users"
                />
                <Widget
                  title="Sellers"
                  n={totalUser.sellerCount}
                  link="view all sellers"
                  to="/sellers"
                />
                <Widget
                  title="Pending Sellers"
                  n={totalUser.pendingSellerCount}
                  link="view all pending sellers"
                  to="/sellerReqs"
                />
                <Widget title="Total Products" n={totalProduct.totalCount} />
              </div>

              <div className="charts">
                <Featured />
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
