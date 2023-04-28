import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "./styled.module.css";
import Slider from "react-slick";
import "./style.css";
import { useTranslation } from "react-i18next";

import { BigContainer } from "../../../styled-app";
import sliderImg1 from "../../../assets/home/popularpor.png";
import sliderImg2 from "../../../assets/home/popularpor2.png";
import sliderImg3 from "../../../assets/home/popularpor3.png";
import sliderImg4 from "../../../assets/home/popularpor4.png";
import { cardData } from "./data";
import { NavLink } from "react-router-dom";

const LikeProduct = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2500,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 475,
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
            <div className={styles.like_slidwrap}>
              <div className={styles.choose_title}>
                <h2>{t("Products.9")}</h2>
                <div className={styles.line}></div>
              </div>
              <Slider {...settings}>
                {cardData.map((elem) => (
                  <div>
                    <NavLink
                      className={styles.params_link}
                      to={`/productmore/${elem.id}`}
                    >
                      <img
                        className={styles.slider_img}
                        src={sliderImg1}
                        alt=""
                      />
                      <h4>{elem.title}</h4>
                    </NavLink>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default LikeProduct;
