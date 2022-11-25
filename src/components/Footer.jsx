import PlaystoreIcon from "../components/assets/google-play.png";
import AppleIcon from "../components/assets/app-store.png";
import CompanyLogo from './assets/CompanyLogo.png'
import '../styles/Footer.css'


export default function Footer() {
  return (
      <footer>
          <div className="footer">
        <div className="first-section">
          <div className="footer__nav">
            <img src={CompanyLogo} className="footer__logo" alt="logo" />
            <div className="footer__links">
              <a href="/" className="footer__link">About Us</a>
              <a href="/" className="footer__link">Weather News</a>
              <a href="/" className="footer__link">FAQs</a>
            </div>
          </div>
          <div className="footer__app">
            <span className="footer__app-title">Download the mobile App</span>
            <div className="footer__app--container">
              <img src={AppleIcon} alt="app store" className="apple-icon" />
              <img src={PlaystoreIcon} alt="google play"  className="playstore-icon"/>
            </div>
          </div>
        </div>
        <div className="last-section">
          <p className="">© 2022 Weathery, All rights reserved to Team Gear</p>
          <div className="">
            <span className="">
              {/* <BsGlobe /> */}
              <span className="">English</span>
            </span>
            <span className="">
              {/* <img src="icons/uk-flag.png" alt="uk flag" /> */}
              <span className="">United Kingdom</span>
            </span>
            <span className="">
              {/* <BiSupport /> */}
              <span className="">Customer Support</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
