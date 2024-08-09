import assets from "../assets";
import { Link } from "react-router-dom";
function ButtonSewa({ isShow }) {
  if (isShow) {
    return (
      <Link className="btn btn-success" to="/sewa">
        Mulai Sewa Mobil
      </Link>
    );
  }
  return "";
}

export default function Banner({ isButtonShow, isBannerShow }) {
  return (
    <>
      <section id="hero" className="bg-red">
        <div className="container">
          {isBannerShow ? (
            <div className="row">
              <div className="col-7 d-flex align-items-center">
                <div>
                  <h1 className="text-light">
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                  <p className="text-white-200">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  <ButtonSewa isShow={isButtonShow} />
                </div>
              </div>
              <div className="col-5">
                <img
                  className="img-fluid"
                  src={assets.zenixImg}
                  alt="Innova Zenix"
                />
              </div>
            </div>
          ) : (
            <div className="row">
              <div
                className="col-7 d-flex align-items-center"
                style={{ height: "200px" }}
              ></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
