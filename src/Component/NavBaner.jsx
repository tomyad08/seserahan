import React from "react";
import Banner from "./banner";
import Navigasi from "./navigasi";

const NavBaner = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(black,#1E2D38,#1E2D38,#1E2D38)",
      }}
      id="beranda"
    >
      <Navigasi />
      <Banner />
    </div>
  );
};
export default NavBaner;
