import { useState } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CustomInput from "../components/CustomInput";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import assets from "../assets";
import { Link } from "react-router-dom";

export default function SewaDetail() {
  const [filtersInput, setFiltersInput] = useState([
    {
      type: "text",
      label: "Nama Mobil",
      defaultVal: "",
      key: "name",
      disabled: true,
    },
    {
      type: "text",
      label: "Kategori",
      defaultVal: "",
      key: "category",
      disabled: true,
    },
    {
      type: "text",
      label: "Harga Sewa (per hari)",
      defaultVal: "",
      key: "price",
      disabled: true,
    },
    {
      type: "text",
      label: "Status",
      defaultVal: "",
      key: "status",
      disabled: true,
    },
  ]);

  let { carId } = useParams();
  const [carDetail, setCarDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(carId) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${carId}`
      );
      for (let key in data) {
        let findInput = filtersInput.find((input) => input.key === key);
        if (findInput) {
          findInput.defaultVal = data[key];
          if (key === "status")
            findInput.defaultVal = data[key] ? "Available" : "Not Available";
          if (key === "price")
            // data[key] = `Rp. ${new Intl.NumberFormat("id").format(data[key])}`;
            findInput.defaultVal = `Rp. ${new Intl.NumberFormat("id").format(
              data[key]
            )}`;
        }
      }
      setCarDetail(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(carId);
  }, [carId]);

  useEffect(() => {}, [carDetail]);

  return (
    <>
      <Navigation />
      <Banner isButtonShow={false} isBannerShow={false} />

      <section id="search" style={{ marginTop: "-50px" }}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Pencarianmu</h5>
              <form className="row g-3 justify-content-between align-items-end">
                {filtersInput.map((input, i) => (
                  <div key={i} className="col-12 col-lg">
                    <CustomInput typeInput={input} />
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4" id="details">
        {error ? (
          <div className="col-12 col-lg-12 mt-2 text-center">
            <h3 className="text-secondary">Something went wrong</h3>
          </div>
        ) : null}
        {error && !loading ? (
          <div className="col-12 col-lg-12 mt-2 text-center">
            <h3 className="text-secondary">Loading...</h3>
          </div>
        ) : (
          <div className="container">
            <div className="row" style={{ minHeight: "80vh" }}>
              <div className="col-12 col-lg-7">
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="my-4">
                      <h5 className="my-3">Tentang Paket</h5>
                      <h6 className="my-3">Include</h6>
                      <ul className="text-muted">
                        <li>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h6 className="my-3">Exclude</h6>
                      <ul className="text-muted">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                    <div className="my-4">
                      <h6 className="my-3">Refund, Reschedule, Overtime</h6>
                      <ul className="text-muted">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body">
                    <img
                      src={carDetail.image}
                      alt={carDetail.name}
                      style={{
                        objectFit: "cover",
                        height: "300px",
                        width: "100%",
                      }}
                    />
                    <h5 className="my-4">{carDetail.name}</h5>
                    <p className="text-muted">
                      <img src={assets.fi_users} alt="user" /> 6 - 8 Orang
                    </p>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "100px", marginTop: "100px" }}
                    >
                      <h6>Total</h6>
                      <h6>
                        Rp.{" "}
                        {new Intl.NumberFormat("id").format(carDetail.price)}
                      </h6>
                    </div>
                    <Link to="/sewa" className="btn btn-success w-100">
                      Proceed
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
