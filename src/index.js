import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "blog",
    element: <Blog />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
