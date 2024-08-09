import { useEffect, useState } from "react";
import axios from "axios";
import Binar from "../core/getCars";
import Assets from "../assets";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CarResult({ filterData, triggerAction }) {
  async function fetchData(inputFilter = null) {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/customer/car"
      );
      const cars = await Binar.populateCars(response.data);
      console.log("carsRaw", cars);
      let carsFilter = cars;
      if (inputFilter) {
        carsFilter = await cars.filter((car) => {
          return car.typeDriver == filterData.typeDriver;
        });
      }
      console.log("carsRaw", carsFilter);

      setCarsData(carsFilter);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const [carsData, setCarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const performAction = () => {
    fetchData(filterData);
  };

  // When the triggerAction prop is called, perform the action
  triggerAction.current = performAction;

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading && carsData.length == 0) {
    return (
      <>
        <div className="col-12 col-lg-12 mt-2 text-center">
          <h3 className="text-secondary">Data not found</h3>
        </div>
      </>
    );
  }

  if (loading)
    return (
      <>
        <div className="col-12 col-lg-12 mt-2 text-center">
          <h3 className="text-secondary">Loading...</h3>
        </div>
      </>
    );
  if (error)
    return (
      <>
        <div className="col-12 col-lg-12 mt-2 text-center">
          <h3 className="text-muted">Error: {error.message}</h3>
        </div>
      </>
    );

  return (
    <section id="result">
      <div className="container mt-3">
        <div className="row" id="car-result">
          {carsData.map((car) => {
            return (
              <div key={car.id} className="col-12 col-lg-4 mt-2">
                <div className="card">
                  <div className="card-body p-4">
                    <img
                      src={car.image}
                      className="card-img-top"
                      alt="Toyota Cars"
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                    <p className="card-text">{car.name}</p>
                    <h5 className="card-title">
                      Rp. {new Intl.NumberFormat("id-ID").format(car.price)} /
                      Hari
                    </h5>
                    <p className="card-text">{car.description}</p>
                    <p className="card-text">
                      <img src={Assets.fi_users} alt="settings" />{" "}
                      {car.capacity} Orang
                    </p>
                    <p className="card-text">
                      <img src={Assets.fi_settings} width={20} alt="Setting" />{" "}
                      {car.transmision}
                    </p>
                    <p className="card-text">
                      <img src={Assets.fi_calendar} alt="settings" /> Tahun{" "}
                      {car.yearReleased}
                    </p>
                    <Link
                      to={`/sewa/${car.id}`}
                      className="btn btn-success w-100"
                    >
                      Pilih Mobil
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

CarResult.propTypes = {
  filterData: PropTypes.object,
  triggerAction: PropTypes.object,
};
