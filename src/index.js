import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "./store/store";
import { ReactQueryDevtools } from "react-query/devtools";
import { DarkModeContextProvider } from "./context/darkModeContext";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </Provider>
      <ReactQueryDevtools initailIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
