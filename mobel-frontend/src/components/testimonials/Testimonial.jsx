import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import authorImg from "../../assets/testimonial-author.jpg"; // عدّل المسار لو لازم
import styles from "./Testimonial.module.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    // يمكن إضافة responsive إذا أردت تغيير عدد الشرائح على شاشات كبيرة
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="row">
          {/* Carousel side */}
          <div className="col-lg-7">
            <Slider {...settings} className="slick-slider">
              <div className={styles.item}>
                <p>
                “Working with your team was a great experience. The project was delivered on time, and the results exceeded our expectations. We truly recommend your services.
                </p>
                <div className={styles.author}>
                  <img src={authorImg} alt="Claude David" />
                  <div className={styles.meta}>
                    <span className={styles.category}>Full Stack Master</span>
                    <h4>Claude David</h4>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <p>
                “We are very happy with the support and communication. Everything was smooth from start to finish, and the quality of work was outstanding. Highly professional service.
                </p>
                <div className={styles.author}>
                  <img src={authorImg} alt="Thomas Jefferson" />
                  <div className={styles.meta}>
                    <span className={styles.category}>UI Expert</span>
                    <h4>Thomas Jefferson</h4>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <p>
                “The collaboration was excellent from the first meeting. Every detail was handled carefully, and the outcome was better than what we imagined. Great job overall.
                </p>
                <div className={styles.author}>
                  <img src={authorImg} alt="Stella Blair" />
                  <div className={styles.meta}>
                    <span className={styles.category}>Digital Animator</span>
                    <h4>Stella Blair</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/* Heading side */}
          <div className="col-lg-5 align-self-center">
            <div className={styles.sectionHeading}>
              <h6>TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>
              We value the trust of our clients and strive to deliver the best
      solutions. Here’s what some of them shared about their experience
      with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
