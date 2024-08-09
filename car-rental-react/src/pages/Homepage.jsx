import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { Accordion } from "react-bootstrap";

import assets from "../assets";

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner isButtonShow={true} isBannerShow={true} />

      <section id="services">
        <div className="container p-4">
          <div className="row">
            <div className="col-6">
              <div className="position-relative">
                <img src={assets.happyGirl} alt="happy girl" />
              </div>
            </div>
            <div className="col-6 d-flex align-items-center">
              <div>
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4" id="why-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Why Us?</h2>
              <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body p-4">
                  <img
                    src={assets.thumbsUp}
                    alt="Thumbs Up"
                    width="32"
                    height="32"
                  />
                  <h6 className="my-3">Mobil Lengkap</h6>
                  <p className="my-3">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body p-4">
                  <img
                    src={assets.priceImg}
                    alt="Price"
                    width="32"
                    height="32"
                  />
                  <h6 className="my-3">Harga Murah</h6>
                  <p className="my-3">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body p-4">
                  <img
                    src={assets.clockImg}
                    alt="Price"
                    width="32"
                    height="32"
                  />
                  <h6 className="my-3">Layanan 24 Jam</h6>
                  <p className="my-3">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body p-4">
                  <img
                    src={assets.profesionalImg}
                    alt="Price"
                    width="32"
                    height="32"
                  />
                  <h6 className="my-3">Sopir Profesional</h6>
                  <p className="my-3">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <section id="sewa-mobil">
        <div className="container p-5 my-5 d-flex justify-content-center bg-red text-light rounded-4">
          <div className="text-center p-4">
            <h2 className="mb-4 col-12">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="mb-5 col-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              cumque, quod atque ipsum accusantium alias odit temporibus? Id
              minus adipisci, nihil accusamus consectetur magnam excepturi fugit
              consequatur ea. Quos, saepe?
            </p>
            <a href="#" className="btn btn-success">
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-12 col-md-7">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
