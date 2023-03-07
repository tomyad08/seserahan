import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// const options = {
//   items: 4,
// };

const Testimoni = () => {
  const dataTestimoni = [
    {
      id: "1",
      gambar: "./assets/pengantin.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis ",
      nama: "John Dee 32, Bromo",
    },
    {
      id: "2",
      gambar: "./assets/pengantin.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis ",
      nama: "Bruce Lee 12, Nganjuk",
    },
    {
      id: "3",
      gambar: "./assets/pengantin.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis ",
      nama: "Buah Jatuh 25, Cianjur",
    },
    {
      id: "4",
      gambar: "./assets/pengantin.jpg",
      star: "./assets/Rate.png",
      deskripsi:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error vel laborum doloribus, libero qui, omnis itaque amet ab earum possimus, quia facilis  ",
      nama: "Joni 32, Bromo",
    },
  ];

  return (
    <div className="container-fluid" id="testimoni">
      <div className="mt-4">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: "75px" }}>
            Testimoni
          </h2>
          <p className="text-center mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            totam, quae cum reprehenderit quam error commodi culpa hic iusto
            animi!
          </p>
        </div>
        <div className="row">
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
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 3,
              },
            }}
          >
            {dataTestimoni.map((value) => (
              <div className=" row item  mb-2 mx-2 " id="corousel">
                <div className="col-md">
                  <img
                    src={value.gambar}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "20px",
                    }}
                    alt="user"
                  />
                </div>
                <div className="col-md">
                  <p>
                    <q style={{ textAlign: "justify" }}>{value.deskripsi}</q>
                  </p>
                  <h6 className="text-left">{value.nama}</h6>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
