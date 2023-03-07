import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="banner">
        <div
          className="col-md text-center align-items-center"
          id="tulisanBanner"
        >
          <h1 id="seserahanBanner">
            <strong>Seserahan</strong>
          </h1>
          <p
            style={{
              color: "white",
              marginLeft: "10px",
              marginRight: "10px",
              textAlign: "justify",
            }}
          >
            adaalah Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda facilis voluptatem quis vel ratione impedit recusandae
            ipsa voluptas repudiandae iure .
          </p>
          <button
            className="btn py-1 px-5 border border-0 rounded-4"
            style={{
              color: "white",
              fontSize: "25px",
              backgroundColor: "#FDC700",
              color: "black",
            }}
            id="explore"
          >
            Explore
          </button>
        </div>
        <div className="col-md">
          <div className=" d-flex justify-content-center " id="fotoBanner">
            <img
              src="./assets/trans.png"
              alt=" "
              width="160%"
              style={{ position: "relative", left: "-30px", top: "-20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
