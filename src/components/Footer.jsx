import React from 'react'

export default function Footer() {
  return (
      <footer>
          <div className="">
        <div className="">
          <div>
            <img src="logo-white.png" alt="logo" />
            <div className="footer__links">
              <a href="/" className="footer__link">About us</a>
              <a href="/" className="footer__link">Careers</a>
              <a href="/" className="footer__link">Weather News</a>
              <a href="/" className="footer__link">For Business</a>
              <a href="/" className="footer__link">FAQs</a>
              <a href="/" className="footer__link">Contact Us</a>
              <a href="/" className="footer__link">Culture</a>
            </div>
          </div>
          <div>
            <span className="footer-title">Download the mobile app</span>
            <div className="">
              <img src="app-store.png" alt="app store" />
              <img src="google-play.png" alt="google play" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="">© 2022 Weathery, All rights reserved to Team Gear</p>
          <div className="">
            <span className="">
              {/* <BsGlobe /> */}
              <span className="">English</span>
            </span>
            <span className="">
              <img src="icons/uk-flag.png" alt="uk flag" />
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
