import React from "react";

const Kontak = () => {
  return (
    <div
      className="container-fluid py-3 text-center"
      style={{
        background: "linear-gradient(black,#1E2D38,#1E2D38,#1E2D38)",
        color: "white",
      }}
      id="kontak"
    >
      <div className="row">
        <div className="col-md">
          <h5>Jl. Imam Bonjol no.5</h5>
          <p>Kec.Babakan, Kab. Cirebon</p>
          <p>Kode Pos</p>
        </div>
        <div className="col-md">
          <h5>Sosmed seserahan IG, WhatsApp, dan Facebook</h5>
        </div>
        <div className="col-md">
          <h5>Beranda</h5>
          <h5>Product</h5>
          <h5>FAQ</h5>
        </div>
        <div className="col-md">
          <h5>Seserahan.id</h5>
        </div>
      </div>
    </div>
  );
};
export default Kontak;
