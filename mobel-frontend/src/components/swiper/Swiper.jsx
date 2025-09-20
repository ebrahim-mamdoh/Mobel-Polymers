import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Swiper.module.css";

// logos
import elnemr from "../../assets/clients/Elnemr.png";
import elsewedy from "../../assets/clients/elsewedy.png";
import euroquarzo from "../../assets/clients/euroquarzo.png";
import jotun from "../../assets/clients/jotun.png";
import townMix from "../../assets/clients/townMix.png";
import elnemr2 from "../../assets/clients/Elnemr.png";
import elsewedy2 from "../../assets/clients/elsewedy.png";
import euroquarzo2 from "../../assets/clients/euroquarzo.png";
import jotun2 from "../../assets/clients/jotun.png";
import townMix2 from "../../assets/clients/townMix.png";
const clients = [elnemr, elsewedy, euroquarzo, jotun, townMix , elnemr2, elsewedy2, euroquarzo2, jotun2, townMix2];

export default function ClientsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="container">
      <section className={styles.carouselSection}>
        <h2 className={styles.sectionTitle}>Our Clients</h2>

        <div className={styles.clientSwiperWrapper}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            speed={700}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            grabCursor={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // نحفظ الريفرنس
            className={styles.clientSwiper}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 16 },
              576: { slidesPerView: 3, spaceBetween: 18 },
              992: { slidesPerView: 4, spaceBetween: 22 },
              1200: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {clients.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className={styles.clientCard}>
                  <img src={logo} alt={`Client ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* arrows خارج السويبر */}
          <button ref={prevRef} className={`${styles.arrow} ${styles.prevArrow}`} aria-label="Previous">
            &#8592;
          </button>
          <button ref={nextRef} className={`${styles.arrow} ${styles.nextArrow}`} aria-label="Next">
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
}
