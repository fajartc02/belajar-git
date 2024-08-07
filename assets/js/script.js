const typeDriver = document.getElementById("driver-type");
const reservationDate = document.getElementById("reservation-date");
const reservationTime = document.getElementById("reservation-time");
const reservationPassenger = document.getElementById("reservation-passenger");
const btnSearch = document.getElementById("btn-search");
const carResult = document.getElementById("car-result");

reservationDate.value = new Date().toISOString().split("T")[0];
const hour = new Date().toISOString().split("T")[1].split(".")[0].split(":")[0];
const minute = new Date()
  .toISOString()
  .split("T")[1]
  .split(".")[0]
  .split(":")[1];
reservationTime.value = `${hour}:${minute}`;

function handleMessageHtml(message) {
  return `<h3 class="text-center my-4 text-secondary">
${message}
</h3>`;
}

const filterData = {
  typeDriver: "",
  date: "",
  time: "",
  totalPassenger: "",
};

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  filterData.typeDriver = typeDriver.value;
  filterData.date = reservationDate.value;
  filterData.time = reservationTime.value;
  filterData.totalPassenger = reservationPassenger.value;
  // {
  //     typeDriver: "Dengan Supir",
  //     date: "2024-...",
  //     time: "07:00",
  //     totalPassenger: "2",
  // }
  // memanggil fungsi getData(parameter)
  getData(filterData);
});

reservationPassenger.addEventListener("change", (event) => {
  if (event.target.value < 1) reservationPassenger.value = 1;
});
carResult.innerHTML = handleMessageHtml(
  "Silahkan pilih mobil yang ingin dipesan"
);
async function getData(filterData) {
  carResult.innerHTML = handleMessageHtml("Loading...");
  const getCars = await fetch(
    "https://api-car-rental.binaracademy.org/customer/car"
  );
  const result = await getCars.json();

  const data = Binar.populateCars(result);
  console.log(data);
  carResult.innerHTML = "";
  const filteredData = data.filter((item) => {
    return item.typeDriver == filterData.typeDriver;
  });
  if (filteredData.length == 0) {
    carResult.innerHTML = handleMessageHtml("tidak ada mobil tersedia");
  } else {
    for (let i = 0; i < filteredData.length; i++) {
      const element = filteredData[i];
      carResult.innerHTML += `<div class="col-12 col-lg-4 mt-2">
                <div class="card">
                  <img
                    src="${element.image}"
                    class="card-img-top"
                    alt="Toyota Cars"
                    style="object-fit: cover;height: 200px"
                  />
                  <div class="card-body">
                    <p class="card-text">${element.name}</p>
                    <h5 class="card-title">Rp. ${new Intl.NumberFormat(
                      "id-ID"
                    ).format(element.price)} / Hari</h5>
                    <p class="card-text">
                      ${element.description}
                    </p>
                    <p class="card-text">
                      <img src="assets/img/fi_users.png" alt="settings" /> ${
                        element.capacity
                      } Orang
                    </p>
                    <p class="card-text"><img src="assets/img/fi_settings.png" alt="settings" /> ${
                      element.transmision
                    }</p>
                    <p class="card-text"><img src="assets/img/fi_calendar.png" alt="settings" /> Tahun ${
                      element.yearReleased
                    }</p>
                    <a href="#" class="btn btn-success w-100">Pilih Mobil</a>
                  </div>
                </div>
  
              </div>`;
    }
  }
}
