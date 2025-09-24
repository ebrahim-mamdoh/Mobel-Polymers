// src/components/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // 👈 استيراد Link
import styles from "./Footer.module.css";
import footerBg from "../../assets/footer-1.jpg";
import logo from "../../assets/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaPhone, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <img src={logo} alt="Mobel Polymers" className={styles.logo} />
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/mobel.polymers.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/mobel-polymers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/mobel.polymers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
  href="tel:+201222115773"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaPhone /> 
</a>
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksSection}>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="/about">Company Profile</Link>
              </li>
              <li>
                <Link to="/media-center">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Media Center</h4>
            <ul>
              <li>
                <Link to="/media-center">Shows</Link>
              </li>
              <li>
                <Link to="/media-center">Projects</Link>
              </li>
              <li>
                <Link to="/media-center">News</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <Link to="/contact">Request Quotation</Link>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/iiy7Wo8cbZv5DoaH6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Location
                </a>
              </li>
              <li>
                <a href="mailto:info@mobelpolymers.net">E-mail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
