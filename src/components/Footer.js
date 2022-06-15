import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-1 flex-between">
          <div>
            <img
              src={logo}
              width={200}
              height={80}
              alt="Logo"
              className="logo-img"
            />
          </div>
          <div className="address-link flex-between">
            <section className="address">
              <div className="contact">
                <h5>Contact</h5>
                <p>
                  4, Araromi Street,
                  <span> off Oduyemi Street, </span>
                  <span> Anifowoshe Area, Ikeja, </span>
                  <span style={{ marginBottom: "10px" }}> Lagos, Nigeria.</span>
                </p>
                <a
                  href="mailto:info@ican-ikejadistrictsociety.org"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    width: "70%",
                  }}
                >
                  info@ican-ikejadistrictsociety.org
                </a>
              </div>
            </section>
            <section className="links">
              <h5>Links</h5>
              <ul className="links-list">
                <li>Home</li>
                <li>About us</li>
                <li>Executives</li>
                <li>Past Chairmen</li>
                <li>Gallery</li>
                <li>Accouting Firms</li>
                <li>Members</li>
                <li>Contact Us</li>
              </ul>
            </section>
          </div>
        </div>
        <hr
          style={{
            color: "#ffffff",
            borderTop: "1px solid white",
            width: "70%",
            marginRight: "0px",
          }}
        />
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            marginBottom: "10px",
            paddingBottom: "20px",
          }}
        >
          Copyrights &copy; 2022 Ikeja & District Society of ICAN (IDSICAN). All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
