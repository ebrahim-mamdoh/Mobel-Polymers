import React from "react";
import styles from "./Footer.module.css";
import footerBg from "../../assets/footer.jpg";
import logo from "../../assets/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

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
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksSection}>
          <div>
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Company Profile</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4>Media Center</h4>
            <ul>
              <li><a href="#">Shows</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Request Quotation</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">E-mail</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
