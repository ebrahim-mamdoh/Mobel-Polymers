import React from 'react'
import styles from "./Home.module.css"
import visionImg from "../../assets/vision.png"
import missionImg from "../../assets/mission.png"

import Sectors1 from "../../assets/Sectors1.svg"
import Sectors2 from "../../assets/Sectors2.svg"
import Sectors3 from "../../assets/Sectors3.svg"
import Sectors4 from "../../assets/Sectors4.svg"
import Sectors5 from "../../assets/Sectors5.svg"
import Sectors6 from "../../assets/Sectors6.svg"

// import product images
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



export default function Home() {
  return (<>

    <div className="container">
      <div className={styles.hero}>
        <h1>
          Providing solutions that drive innovation <br />
          and support environmental preservation
        </h1>
      </div>
    </div>


    {/* ***********  vision  Section  ************ */}

    <section className={styles.vision}>
  <div className="container">
    <div className={`row align-items-center ${styles.visionContainer}`}>
      {/* Text Column */}
      <div className="col-md-6 col-sm-12">
        <h2 className={styles.sectionTitle}>Our Vision</h2>
        <p className={styles.visionText}>
          To be global leaders in the emulsion polymers industry
          through sustainable innovation, offering high-quality products
          that contribute to the development of various industries and
          support global efforts to preserve the environment.
        </p>
      </div>

      {/* Image Column */}
      <div className="col-md-6 col-sm-12 d-flex justify-content-center">
        <img
          src={visionImg}
          alt="Vision"
          className={styles.visionImg}
        />
      </div>
    </div>
  </div>
</section>


    {/* ***********  mission  Section  ************ */}
  <div className="container">
    <section className={styles.mission}>
    <div className={`row align-items-center ${styles.missionContainer}`}>
      
      {/* Image Column */}
      <div className="col-md-6 col-sm-12 d-flex justify-content-center">
        <img
          src={missionImg} 
          alt="Mission"
          className={styles.missionImg}
        />
      </div>

      {/* Text Column */}
      <div className="col-md-6 col-sm-12">
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          To be global leaders in the emulsion polymers industry
          through sustainable innovation, offering high-quality products
          that contribute to the development of various industries and
          support global efforts to preserve the environment.
        </p>
      </div>
    </div>
</section>
  </div>



    {/* ***********   company sector   ************ */}
 
    
  <div className="container">
  <section className={styles.sectors}>
    <h2 className={styles.sectionTitle}>Company Sectors</h2>
    <div className="row justify-content-center">

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors1} alt="Waste Treatment" className={styles.sectorIcon} />
        <p className={styles.sectorText}>
          Treatment of radioactive and non-radioactive waste
        </p>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors2} alt="Water Treatment" className={styles.sectorIcon} />
        <p className={styles.sectorText}>
          Water treatment for petroleum extraction
        </p>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors3} alt="Wood Manufacturing" className={styles.sectorIcon} />
        <p className={styles.sectorText}>
          Wood manufacturing from recycling agricultural waste
        </p>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors4} alt="Emulsion Polymers" className={styles.sectorIcon} />
        <p className={styles.sectorText}>Emulsion Polymers</p>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors5} alt="Petrochemical Factories" className={styles.sectorIcon} />
        <p className={styles.sectorText}>
          Setup & Operate petrochemicals Factories
        </p>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-6 text-center mb-4">
        <img src={Sectors6} alt="Road Construction" className={styles.sectorIcon} />
        <p className={styles.sectorText}>Road Construction with Polymers</p>
      </div>

    </div>
    </section>
  </div>


{/* ***********  Products Section  ************ */}
<div className="container">
  <section className={styles.products}>
    <h2 className={styles.sectionTitle}>Products</h2>

    <div className="row">
      {[
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
      ].map((product, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-space-around"
        >
          <div className={styles.productCard}>
            <img src={product.img} alt={product.name} className={styles.productImg} />
          </div>
        </div>
      ))}
    </div>
  </section>
</div>



  </>

  )
}
