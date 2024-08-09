import assets from "../assets";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-12 col-lg-3">
              <ul>
                <li className="li-style-none">Our Services</li>
                <li className="li-style-none">Why Us</li>
                <li className="li-style-none">Testimonial</li>
                <li className="li-style-none">FAQ</li>
              </ul>
            </div>
            <div className="col-12 col-lg-2">
              <p>Connect with us</p>
              <div className="d-flex justify-content-between mt-3">
                <img src={assets.facebookIco} alt="Facebook" />
                <img src={assets.instagramIco} alt="Instagram" />
                <img src={assets.twitterIco} alt="Instagram" />
                <img src={assets.mailIco} alt="Mail" />
                <img src={assets.twitchIco} alt="Twitch" />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-end mt-2">
              <p>Copyright Binar 2022</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
