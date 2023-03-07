import React, { useState } from "react";

const Navigasi = () => {
  const [keadaan, setKeadaan] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row pt-3 pb-1">
        <div className="col" id="sandwich">
          <img
            src="./assets/sandwich.png"
            alt=""
            width="40px"
            className="border border-0 rounded-2"
            onClick={() => setKeadaan(!keadaan)}
          />
        </div>
        <div className="col">
          <h4
            className="fs-1"
            style={{ fontFamily: "'Satisfy', cursive", color: "white" }}
          >
            Seserahan.id
          </h4>
        </div>
        <div className="col" style={{ color: "white" }}>
          <div className="float-end">
            <a
              href="#beranda"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span id="navigasi" className="mx-1 p-2 fs-4">
                Beranda
              </span>
            </a>
            <a
              href="#etalase"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span id="navigasi" className="mx-1 p-2 fs-4">
                Etalase
              </span>
            </a>
            <a href="#faq" style={{ textDecoration: "none", color: "white" }}>
              <span id="navigasi" className="mx-1 p-2 fs-4">
                FAQ
              </span>
            </a>
            <a
              href="#kontak"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span id="navigasi" className="mx-1 p-2 fs-4">
                Kontak
              </span>
            </a>
            <span>
              <img
                src="./assets/keranjang.jpg"
                alt=""
                width="50px"
                className="border border-0 rounded-5 p-1"
                style={{ backgroundColor: "white" }}
              />
            </span>
          </div>
        </div>
        {keadaan && (
          <div
            className="p-1 border border-0 rounded-2 row justify-content-around mx-1 mt-2"
            style={{ backgroundColor: "white" }}
          >
            <div className="col">
              <a
                href="#beranda"
                style={{ textDecoration: "none", color: "black" }}
              >
                Beranda
              </a>
            </div>
            <div className="col">
              <a
                href="#etalase"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Etalase{" "}
              </a>
            </div>
            <div className="col">
              <a
                href="#testimoni"
                style={{ textDecoration: "none", color: "black" }}
              >
                Testimoni
              </a>
            </div>
            <div className="col">
              <a
                href="#kontak"
                style={{ textDecoration: "none", color: "black" }}
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navigasi;
