import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

import NavBaner from "./Component/NavBaner";

import ProductUnggulan from "./Component/ProductUnggulan";
import FAQ from "./Component/FAQ";
import Kontak from "./Component/Kontak";
import Testimoni from "./Component/Testimoni";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBaner />
    <ProductUnggulan />
    <FAQ />
    <Testimoni />
    <Kontak />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
