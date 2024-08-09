import { useState, useRef } from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CustomInput from "../components/CustomInput";
import moment from "moment";
import CarResult from "../components/CarResult";

export default function Sewa({ onLogout }) {
  const handleChangeFilter = (input) => {
    const { name, value } = input.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const triggerAction = useRef(null);

  const handleSubmit = () => {
    console.log("filterData", filterData);
    if (triggerAction.current) {
      triggerAction.current();
    }
  };

  const filtersInput = [
    {
      type: "option",
      label: "Tipe Driver",
      key: "typeDriver",
      fnMethod: handleChangeFilter,
      defaultVal: "",
    },
    {
      type: "date",
      label: "Tanggal",
      key: "reservationDate",
      fnMethod: handleChangeFilter,
      defaultVal: moment().format("YYYY-MM-DD"),
    },
    {
      type: "time",
      label: "Waktu Jemput / Ambil",
      key: "reservationTime",
      fnMethod: handleChangeFilter,
      defaultVal: moment().format("HH:mm"),
    },
    {
      type: "number",
      label: "Jumlah Penumpang (opsional)",
      key: "passengerCount",
      fnMethod: handleChangeFilter,
      defaultVal: null,
    },
    {
      type: "button",
      label: "Cari Mobil",
      fnMethod: handleSubmit,
    },
  ];

  let inputsInit = {};
  filtersInput.forEach((data) => {
    if (data.key) {
      inputsInit[data.key] = data.defaultVal;
    }
  });

  const [filterData, setFilterData] = useState(inputsInit);

  return (
    <>
      <Navigation onLogout={onLogout} />
      <Banner isButtonShow={false} isBannerShow={true} />

      <section id="search" style={{ marginTop: "-50px" }}>
        <div className="container">
          <div className="card">
            <div className="card-body">
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

      <CarResult filterData={filterData} triggerAction={triggerAction} />

      <Footer />
    </>
  );
}
