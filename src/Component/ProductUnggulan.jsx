import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductUnggulan = () => {
  const Datas = [
    {
      id: 1,
      gambar: "./assets/ProductA.jpg",
      nama: "Product A",
      harga: 70000,
    },
    {
      id: 2,
      gambar: "./assets/ProductB.jpg",
      nama: "Product B",
      harga: 80000,
    },
    {
      id: 3,
      gambar: "./assets/ProductC.jpg",
      nama: "Product C",
      harga: 50000,
    },
    {
      id: 4,
      gambar: "./assets/ProductD.jpg",
      nama: "Product D",
      harga: 70000,
    },
    {
      id: 5,
      gambar: "./assets/ProductE.jpg",
      nama: "Product E",
      harga: 90000,
    },
  ];
  return (
    <div className="container-fluid py-4" id="etalase">
      <div className="container">
        <h1 className="text-center" style={{ fontSize: "80px" }}>
          Etalase
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          necessitatibus dolorum repellat.
        </p>
        <div className="row justify-content-around">
          <OwlCarousel
            className="owl-theme"
            center={true}
            loop={true}
            margin={10}
            nav={true}
            dots={false}
            autoplay={true}
            autoplayTimeout={4000}
            responsive={{
              0: {
                items: 2,
              },
              1000: {
                items: 3,
              },
              1200: {
                items: 5,
              },
            }}
          >
            {Datas.map((value) => (
              <div
                className="col-md-10 col-11 border border-2 rounded-2"
                style={{
                  width: "100%",
                  overflowX: "hidden",
                  background: "linear-gradient(#1E2D38,#1E2D38)",
                  color: "white",
                }}
                key={value.id}
              >
                <div className="mb-3">
                  <img src={value.gambar} alt=" " style={{ width: "100%" }} />

                  <div
                    className="ps-2 pt-1 text-center"
                    style={{
                      fontFamily: "'Signika Negative', sans-serif",
                    }}
                  >
                    <h4 id="fontNama">{value.nama}</h4>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <h5 className=" text-center">Tampilkan seluruh produk</h5>
      </div>
    </div>
  );
};
export default ProductUnggulan;
