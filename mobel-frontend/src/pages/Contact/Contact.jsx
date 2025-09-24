import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles["contact-us"]} id="contact">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div
              className="col-lg-6 align-self-center"
              data-aos="fade-right"
            >
              <div className={styles["section-heading"]}>
                <h6 data-aos="fade-down">Contact Us</h6>
                <h2 data-aos="fade-up">Feel free to contact us anytime</h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  Our team is ready to answer your questions, provide more
                  information about our products, or assist you with any
                  inquiries. Don’t hesitate to reach out — we’ll get back to you
                  as soon as possible.
                </p>
                <div
                  className={styles["special-offer"]}
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <span className={styles.offer}>
                    off
                    <br />
                    <em>50%</em>
                  </span>
                  <h6>
                    Check back later for <em>latest news</em>
                  </h6>
                  <h4>
                    Stay tuned for <em>upcoming updates</em>!
                  </h4>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className={styles["contact-us-content"]}>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className={styles["contact-form"]}
                >
                  {/* Access Key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="a564c041-e931-4207-b683-6a8e84f354f9"
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name..."
                          required
                          className={styles.input}
                          data-aos="fade-up"
                          data-aos-delay="100"
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
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          className={styles.textarea}
                          data-aos="fade-up"
                          data-aos-delay="300"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          className={styles.button}
                          data-aos="zoom-in"
                        >
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

      {/* Map Section */}
      <div className="container my-5" data-aos="fade-up">
        <h2 className="mb-4">Our Location</h2>
        <div
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2521548835017!2d31.246032!3d30.034364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c5f32cbe9d%3A0x7f2a8b02f7bde24!2sAl-Azhar%20University!5e0!3m2!1sen!2seg!4v1695555555555!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
