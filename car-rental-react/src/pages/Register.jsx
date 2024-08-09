import assets from "../assets";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section id="register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 p-0">
            <img
              src={assets.bgToyota}
              alt="Yaris cross"
              style={{ height: "100vh", position: "absolute", zIndex: "-1" }}
            />
            <div
              className="d-flex justify-content-center align-items-end"
              style={{ height: "100vh" }}
            >
              <h1
                className="text-light m-0 text-end font-poppin"
                style={{ width: "300px" }}
              >
                TMMIN <br />
                CAR RENTAL
              </h1>
            </div>
          </div>
          <div className="col-6 p-0">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh", width: "100%" }}
            >
              <form style={{ width: "400px" }}>
                <h4>Daftar</h4>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="email"
                    className="form-control rounded-pill p-3"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill p-3"
                    id="form-email"
                    placeholder="contoh: example@mail.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill p-3"
                    placeholder="masukan password"
                  />
                </div>
                <Link
                  to="/login"
                  type="button"
                  className="btn rounded-pill w-100 text-light"
                  style={{ backgroundColor: "#489b4b" }}
                >
                  Register
                </Link>
                {/* <button
                  type="button"
                  className="btn rounded-pill w-100 text-light"
                  style={{ backgroundColor: "#489b4b" }}
                  onClick={navigate("/login")}
                >
                  Register
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
