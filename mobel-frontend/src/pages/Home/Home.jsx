import React, { useEffect } from "react";
import styles from "./Home.module.css";
import visionImg from "../../assets/vision.png";
import missionImg from "../../assets/mission.png";

import ClientsCarousel from "../../components/swiper/Swiper.jsx";

import Sectors1 from "../../assets/Sectors1.svg";
import Sectors2 from "../../assets/Sectors2.svg";
import Sectors3 from "../../assets/Sectors3.svg";
import Sectors4 from "../../assets/Sectors4.svg";
import Sectors5 from "../../assets/Sectors5.svg";
import Sectors6 from "../../assets/Sectors6.svg";

import adhesives from "../../assets/products/adhesives.png";
import adhesives1 from "../../assets/products/adhesives-1.png";
import alkydResin from "../../assets/products/alkyd-resin.png";
import alkydResin1 from "../../assets/products/alkyd-resin-1.png";
import alkydResin2 from "../../assets/products/alkyd-resin-2.png";
import emulsionPolymers from "../../assets/products/emultion-polymers-1.png";
import emulsionPolymers1 from "../../assets/products/emultion-polymers-2.png";
import emulsionPolymers2 from "../../assets/products/emultion-polymers-3.png";
import emulsionPolymers3 from "../../assets/products/emultion-polymers-4.png";
import emulsionPolymers4 from "../../assets/products/emultion-polymers.png";
import paint from "../../assets/products/paint.png";
import paint1 from "../../assets/products/paint-1.png";
import petroleumWaste from "../../assets/products/petroleum-waste-treatment.png";
import petroleumWaste1 from "../../assets/products/petroleum-waste-treatment-1.png";
import petroleumWaste2 from "../../assets/products/petroleum-waste-treatment-2.png";
import petroleumWaste3 from "../../assets/products/petroleum-waste-treatment-3.png";
import petroleumWaste4 from "../../assets/products/petroleum-waste-treatment-4.png";
import polyesterResin from "../../assets/products/polyster-resin-1.png";
import polyesterResin1 from "../../assets/products/polyster-resin.png";
import polyesterResin3 from "../../assets/products/polyster-resin3.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const products = [
    { name: "Adhesives", img: adhesives },
    { name: "Adhesives (Type 1)", img: adhesives1 },
    { name: "Alkyd Resin", img: alkydResin },
    { name: "Alkyd Resin (Type 1)", img: alkydResin1 },
    { name: "Alkyd Resin (Type 2)", img: alkydResin2 },

    { name: "Emulsion Polymers", img: emulsionPolymers },
    { name: "Emulsion Polymers (Type 1)", img: emulsionPolymers1 },
    { name: "Emulsion Polymers (Type 2)", img: emulsionPolymers2 },
    { name: "Emulsion Polymers (Type 3)", img: emulsionPolymers3 },
    { name: "Emulsion Polymers (Type 4)", img: emulsionPolymers4 },

    { name: "Paint Industry", img: paint },
    { name: "Paint Industry (Type 1)", img: paint1 },

    { name: "Petroleum Waste Treatment", img: petroleumWaste },
    { name: "Petroleum Waste Treatment (Type 1)", img: petroleumWaste1 },
    { name: "Petroleum Waste Treatment (Type 2)", img: petroleumWaste2 },
    { name: "Petroleum Waste Treatment (Type 3)", img: petroleumWaste3 },
    { name: "Petroleum Waste Treatment (Type 4)", img: petroleumWaste4 },

    { name: "Polyester Resin", img: polyesterResin1 },
    { name: "Polyester Resin (Type 1)", img: polyesterResin },
    { name: "Polyester Resin (Type 3)", img: polyesterResin3 },
  ];

  return (
    <>
      {/* ***********  Hero Section  ************ */}
      <div className={styles.hero}>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Providing solutions that drive innovation <br />
          and support environmental preservation
        </h1>
      </div>

      {/* ***********  Vision Section  ************ */}
      <section className={styles.vision}>
        <div className="container">
          <div className={`row align-items-center ${styles.visionContainer}`}>
            <div className="col-md-6 col-sm-12" data-aos="fade-right">
              <h2 className={styles.sectionTitle}>Our Vision</h2>
              <p className={styles.visionText}>
                To be global leaders in the emulsion polymers industry through
                sustainable innovation, offering high-quality products that
                contribute to the development of various industries and support
                global efforts to preserve the environment.
              </p>
            </div>

            <div
              className="col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-left"
            >
              <img src={visionImg} alt="Vision" className={styles.visionImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ***********  Mission Section  ************ */}
      <div className="container">
        <section className={styles.mission}>
          <div
            className={`row align-items-center ${styles.missionContainer}`}
          >
            <div
              className="col-md-6 col-sm-12 d-flex justify-content-center"
              data-aos="fade-right"
            >
              <img
                src={missionImg}
                alt="Mission"
                className={styles.missionImg}
              />
            </div>

            <div className="col-md-6 col-sm-12" data-aos="fade-left">
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                To be global leaders in the emulsion polymers industry through
                sustainable innovation, offering high-quality products that
                contribute to the development of various industries and support
                global efforts to preserve the environment.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ***********  Company Sectors Section  ************ */}
   <div className="container">
  <section className={styles.sectors}>
    <h2 className={styles.sectionTitle}>Company Sectors</h2>
    <div className="row justify-content-center">
      {[
        {
          img: Sectors1,
          text: "Treatment of radioactive and non-radioactive waste",
        },
        {
          img: Sectors2,
          text: "Water treatment for petroleum extraction",
        },
        {
          img: Sectors3,
          text: "Wood manufacturing from recycling agricultural waste",
        },
        {
          img: Sectors4,
          text: "Emulsion Polymers",
        },
        {
          img: Sectors5,
          text: "Setup & Operate petrochemicals Factories",
        },
        {
          img: Sectors6,
          text: "Road Construction with Polymers",
        },
      ].map((sector, i) => (
        <div
          key={i}
          className="col-lg-2 col-md-4 col-sm-6 text-center mb-4"
          data-aos="zoom-in"
          data-aos-delay={i * 100}
        >
          <img src={sector.img} alt="Sector" className={styles.sectorIcon} />
          <p className={styles.sectorText}>{sector.text}</p>
        </div>
      ))}
    </div>
  </section>
</div>


      {/* ***********  Products Section  ************ */}
      <div className="container">
        <section className={styles.products}>
          <h2 className={styles.sectionTitle}>Products</h2>

          <div className="row">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                data-aos="flip-up"
                data-aos-delay={(index % 4) * 150}
              >
                <div className={styles.productCard}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={styles.productImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ***********  Clients Carousel  ************ */}
      <div data-aos="fade-up" data-aos-delay="200">
        <ClientsCarousel />
      </div>

      {/* ***********  Contact Section  ************ */}
      <section className={styles.contactSection} data-aos="fade-up">
        <div className="container py-5">
          <div className="row align-items-center">
            <div
              className="col-12 col-md-6 mb-3 mb-md-0"
              data-aos="fade-right"
            >
              <h2 className={styles.contactTitle}>Contact us</h2>
            </div>

            <div
              className="col-12 col-md-6 d-flex justify-content-md-end gap-3"
              data-aos="fade-left"
            >
              <a
                href="mailto:info@mobelpolymers.net"
                className={`${styles.contactBtn} ${styles.emailBtn}`}
              >
                E-mail
              </a>
              <a
                href="https://maps.app.goo.gl/iiy7Wo8cbZv5DoaH6"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactBtn} ${styles.locationBtn}`}
              >
                Locations
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
