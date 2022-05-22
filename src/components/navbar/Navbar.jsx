import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [title, setTitle] = useState("Dashboard");
  const path = useLocation().pathname;
  console.log(path);
  useEffect(() => {
    switch (path) {
      case "/home":
        setTitle("Dashboard");
        break;
      case "/users":
        setTitle("Users");
        break;
      case "/sellers":
        setTitle("Sellers");
        break;
      case "/sellerReqs":
        setTitle("Sellers Pending Requests");
        break;
      default:
        setTitle("Dashboard");
    }
  });

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <h2>{title}</h2>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
