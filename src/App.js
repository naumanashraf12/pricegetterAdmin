import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "./store/store";
import { ReactQueryDevtools } from "react-query/devtools";
import SellerList from "./pages/list/SellerList";
import SellerListPending from "./pages/list/SellerListPending";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className={darkMode ? "app dark" : "app"}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="home" element={<Home />} />
                <Route index element={<Login />} />
                <Route path="users">
                  <Route index element={<List />} />
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
      </Provider>
      <ReactQueryDevtools initailIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
