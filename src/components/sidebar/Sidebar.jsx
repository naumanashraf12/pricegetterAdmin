import "./sidebar.scss";
import { logout } from "../../store/authSlice";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatchs = useDispatch();
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            style={{ width: "200px", height: "150px" }}
            src="./PriceGetter.svg"
            alt=""
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li
            onClick={() => {
              navigate("/home");
            }}
          >
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/sellers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sellers</span>
            </li>
          </Link>
          <Link to="/sellerReqs" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sellers Pendings</span>
            </li>
          </Link>

          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li
            onClick={() => {
              dispatchs(logout());
              navigate("/");
            }}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
