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
    <section className={styles.mission}>
  <div className="container">
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
  </div>
</section>



    {/* ***********   company sector   ************ */}
 


  </>

  )
}
