import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//Routing
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import UserContext from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserContext>
          <App />
        </UserContext>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
