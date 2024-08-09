import { Link } from "react-router-dom";
import assets from "../assets";

export default function Login({ onLogin }) {
  const handleLogin = () => {
    console.log("LOgin on login");

    onLogin();
  };

  return (
    <>
      <section id="login">
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
                  <h4>Masuk</h4>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn rounded-pill w-100 text-light"
                    style={{ backgroundColor: "#489a4b" }}
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-center mt-3">
                    Belum punya akun?
                    <Link
                      to="/register"
                      style={{
                        color: "#489a4b",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Daftar di sini
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
