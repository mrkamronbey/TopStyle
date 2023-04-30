// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./style.css";

import { BigContainer } from "../../../styled-app";
import Ava from "../../../assets/about/Ava.png";
import Ava1 from "../../../assets/about/Ava1.png";
import social from "../../../assets/about/socials.png";
import Star from "../../../assets/about/Star.png";

const ClientSlider = () => {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const slider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    afterChange: () => setUpdateCount(() => updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.news_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("About.22")}</h2>
              <div className={styles.line}></div>
            </div>
            <div className={styles.slider_wrap}>
              <Slider ref={(slider) => (slider = slider)} {...settings}>
                <div className={styles.card_big_wrap}>
                  <div className={styles.slider_card}>
                    <div className={styles.user_box}>
                      <div className={styles.user_info}>
                        <div className={styles.user_name_wrap}>
                          <img src={Ava} alt="" />
                          <div className={styles.div}>
                            <p className={styles.user_name}>Savannah Nguyen</p>
                            <p className={styles.user_email}>
                              savannahnguyen@gmail.com
                            </p>
                          </div>
                        </div>
                        <img src={social} alt="" />
                      </div>
                      <p>
                        Sagittis sed tortor, elementum vitae varius sodales
                        consectetur. Vitae arcu ut morbi bibendum ullamcorper
                        feugiat. Venenatis hendrerit cursus egestas sit ornare
                        nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                        nibh consectetur mollis mauris est mauris amet. Sed hac
                        vehicula id et dui morbi quam pulvinar condimentum.
                        Senectus sed varius interdum nunc, arcu vulputate massa.
                      </p>
                      <div className={styles.card_line}></div>
                      <div className={styles.star_wrap}>
                        <p>{t("About.23")}</p>
                        <div className={styles.star_box}>
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card_big_wrap}>
                  <div className={styles.slider_card}>
                    <div className={styles.user_box}>
                      <div className={styles.user_info}>
                        <div className={styles.user_name_wrap}>
                          <img src={Ava1} alt="" />
                          <div className={styles.div}>
                            <p className={styles.user_name}>Savannah Nguyen</p>
                            <p className={styles.user_email}>
                              savannahnguyen@gmail.com
                            </p>
                          </div>
                        </div>
                        <img src={social} alt="" />
                      </div>
                      <p>
                        Sagittis sed tortor, elementum vitae varius sodales
                        consectetur. Vitae arcu ut morbi bibendum ullamcorper
                        feugiat. Venenatis hendrerit cursus egestas sit ornare
                        nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                        nibh consectetur mollis mauris est mauris amet. Sed hac
                        vehicula id et dui morbi quam pulvinar condimentum.
                        Senectus sed varius interdum nunc, arcu vulputate massa.
                      </p>
                      <div className={styles.card_line}></div>
                      <div className={styles.star_wrap}>
                        <p>{t("About.23")}</p>
                        <div className={styles.star_box}>
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card_big_wrap}>
                  <div className={styles.slider_card}>
                    <div className={styles.user_box}>
                      <div className={styles.user_info}>
                        <div className={styles.user_name_wrap}>
                          <img src={Ava} alt="" />
                          <div className={styles.div}>
                            <p className={styles.user_name}>Savannah Nguyen</p>
                            <p className={styles.user_email}>
                              savannahnguyen@gmail.com
                            </p>
                          </div>
                        </div>
                        <img src={social} alt="" />
                      </div>
                      <p>
                        Sagittis sed tortor, elementum vitae varius sodales
                        consectetur. Vitae arcu ut morbi bibendum ullamcorper
                        feugiat. Venenatis hendrerit cursus egestas sit ornare
                        nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                        nibh consectetur mollis mauris est mauris amet. Sed hac
                        vehicula id et dui morbi quam pulvinar condimentum.
                        Senectus sed varius interdum nunc, arcu vulputate massa.
                      </p>
                      <div className={styles.card_line}></div>
                      <div className={styles.star_wrap}>
                        <p>{t("About.23")}</p>
                        <div className={styles.star_box}>
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card_big_wrap}>
                  <div className={styles.slider_card}>
                    <div className={styles.user_box}>
                      <div className={styles.user_info}>
                        <div className={styles.user_name_wrap}>
                          <img src={Ava1} alt="" />
                          <div className={styles.div}>
                            <p className={styles.user_name}>Savannah Nguyen</p>
                            <p className={styles.user_email}>
                              savannahnguyen@gmail.com
                            </p>
                          </div>
                        </div>
                        <img src={social} alt="" />
                      </div>
                      <p>
                        Sagittis sed tortor, elementum vitae varius sodales
                        consectetur. Vitae arcu ut morbi bibendum ullamcorper
                        feugiat. Venenatis hendrerit cursus egestas sit ornare
                        nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                        nibh consectetur mollis mauris est mauris amet. Sed hac
                        vehicula id et dui morbi quam pulvinar condimentum.
                        Senectus sed varius interdum nunc, arcu vulputate massa.
                      </p>
                      <div className={styles.card_line}></div>
                      <div className={styles.star_wrap}>
                        <p>{t("About.23")}</p>
                        <div className={styles.star_box}>
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className={styles.range_input}>
                <input
                  className={styles.process_input}
                  onChange={(e) => slider.slickGoTo(e.target.value)}
                  value={slideIndex}
                  type="range"
                  min={0}
                  max={3}
                  id="range"
                />
              </div>
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default ClientSlider;
