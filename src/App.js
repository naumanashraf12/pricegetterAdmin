import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import SellerList from "./pages/list/SellerList";
import SellerListPending from "./pages/list/SellerListPending";
import { laodUser } from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Single from "./pages/single/Single";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(laodUser());
    }
  }, [token]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route index element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
            <Route path="user/:id">
              <Route index element={<Single />} />
            </Route>
            <Route path="sellers">
              <Route index element={<SellerList />} />
            </Route>
            <Route path="sellerReqs">
              <Route index element={<SellerListPending />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
