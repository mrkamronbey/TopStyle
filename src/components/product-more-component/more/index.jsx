import React, { useState } from "react";
import styles from "./styled.module.css";
import "./styles.css";
import { BigContainer } from "../../../styled-app";
import Slider from "react-slick";
import sliderImg1 from "../../../assets/home/popularpor.png";
import sliderImg2 from "../../../assets/home/popularpor2.png";
import sliderImg3 from "../../../assets/home/popularpor3.png";
import sliderImg4 from "../../../assets/home/popularpor4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const More = () => {
  const { t } = useTranslation();
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={sliderImg1} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles.more_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.slid_wrapper}>
              <Row className={styles.row}>
                <Col className={styles.col} lg={6} md={12} sm={12} sx={12}>
                  <div className={styles.slider_wrapp}>
                    <Slider {...settings}>
                      <div>
                        <img className={styles.slider_img} src={sliderImg1} />
                      </div>
                      <div>
                        <img className={styles.slider_img} src={sliderImg2} />
                      </div>
                      <div>
                        <img className={styles.slider_img} src={sliderImg3} />
                      </div>
                      <div>
                        <img className={styles.slider_img} src={sliderImg4} />
                      </div>
                    </Slider>
                  </div>
                </Col>
                <Col className={styles.col2} lg={6} md={12} sm={12} sx={12}>
                  <div className={styles.slider_сontent}>
                    <h3 className={styles.product_title}>{t("Products.10")}</h3>
                    <h3>{t("Products.1")}</h3>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.2")}
                      </span>
                      <span className={styles.product_info}>Костюм</span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.3")}
                      </span>
                      <span className={styles.product_info}>
                        Куртка и полукомбинезон
                      </span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.4")}
                      </span>
                      <span className={styles.product_info}>Сигнальный</span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.5")}
                      </span>
                      <span className={styles.product_info}>
                        Oранжевый-темно синий
                      </span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.6")}
                      </span>
                      <span className={styles.product_info}>
                        Смесовая, пл.200-240 г/м²
                      </span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.7")}
                      </span>
                      <span className={styles.product_info}>80%ПЭ/20%ХБ</span>
                    </p>
                    <p>
                      <span className={styles.product_key}>
                        {t("Products.8")}
                      </span>
                      <span className={styles.product_info}>
                        1 год с даты изготовления (при соблюдении условий
                        хранения)
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>{" "}
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default More;
