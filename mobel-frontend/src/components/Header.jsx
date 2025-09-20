// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import navBg from "../assets/header.png";

export default function Header() {
  return (
    <header
      className={`${styles.header} ${styles.bg}`} // removed shadow-sm
      style={{ backgroundImage: `url(${navBg})` }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Mobel Polymers"
              width="150"
              height="150"
              className="me-2 rounded"
            />
          </NavLink>

          {/* Toggler (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className={`navbar-nav ms-auto ${styles.navList}`}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link px-3 " + (isActive ? styles.active : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link px-3 " + (isActive ? styles.active : "")
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/media-center"
                  className={({ isActive }) =>
                    "nav-link px-3 " + (isActive ? styles.active : "")
                  }
                >
                  Media Center
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link px-3 " + (isActive ? styles.active : "")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
