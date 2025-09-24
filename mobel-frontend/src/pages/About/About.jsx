import React from "react";
import styles from "./About.module.css";
import logo from "../../assets/logo.svg"; // تأكد المسار حسب مشروعك
import Testimonials from "../../components/testimonials/Testimonial.jsx";

export default function About() {
  return (
    <>
      <section className={`container ${styles.aboutSection}`}>
        <div className="row align-items-center">
          {/* Text column (left on md+) */}
          <div
            className="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className={styles.textWrap}>
              <h1 className="mb-3 fw-bold">About</h1>
              <h5 className="text-muted mb-4">Company profile</h5>

              <p className="mb-4">
                Mobel Polymers for Polymers and Plasticizers is a factory that
                manufactures resin, polymers, adhesives, additives,
                petrochemical waste treatment, water treatment raw materials,
                and paint raw materials. Four factories are currently operating
                in the 10th of Ramadan city.
              </p>

              <h5 className="fw-semibold mb-3">Company sectors:</h5>
              <ul className={styles.sectorList}>
                <li>Treatment of radioactive waste</li>
                <li>Treatment of non-reactive waste</li>
                <li>Treatment for water used in petroleum extraction</li>
                <li>Wood manufacturing from recycling agricultural waste</li>
                <li>Manufacturing of emulsion petrochemicals</li>
                <li>Manufacturing of emulsion polymers</li>
                <li>Setup and operate petrochemical factories</li>
                <li>Road construction with polymers</li>
              </ul>
            </div>
          </div>

          {/* Image column (right on md+) - centered inside its column */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={logo}
              alt="Mobel Polymers"
              className={`img-fluid ${styles.aboutImg}`}
            />
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
