import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles["contact-us"]} id="contact">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-6 align-self-center">
            <div className={styles["section-heading"]}>
              <h6>Contact Us</h6>
              <h2>Feel free to contact us anytime</h2>
              <p>
                Thank you for choosing our templates. We provide you best CSS
                templates at absolutely 100% free of charge. You may support us
                by sharing our website to your friends.
              </p>
              <div className={styles["special-offer"]}>
                <span className={styles.offer}>
                  off
                  <br />
                  <em>50%</em>
                </span>
                <h6>
                  Valide: <em>24 April 2036</em>
                </h6>
                <h4>
                  Special Offer <em>50%</em> OFF!
                </h4>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-6">
            <div className={styles["contact-us-content"]}>
              <form className={styles["contact-form"]}>
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name..."
                        required
                        className={styles.input}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your E-mail..."
                        required
                        className={styles.input}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className={styles.textarea}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" className={styles.button}>
                        Send Message Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
