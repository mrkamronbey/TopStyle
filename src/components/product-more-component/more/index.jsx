import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ProductGet } from "../../../redux/product";

const More = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductGet());
  }, []);
  const productGets = useSelector((state) => state.product.productGet?.data);
  const findCategory = productGets.filter((elem) => elem.id == id);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const settings = {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       {findCategory.map((elem) =>
    //         elem.images.map((imgs) => <img src={imgs.image} />)
    //       )}
    //     </a>
    //   );
    // },
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <>
      <div className={styles.more_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.slid_wrapper}>
              <Row className={styles.row}>
                <Col className={styles.col} lg={5} md={12} sm={12} sx={12}>
                  <div className={styles.slider_wrapp}>
                    <Slider {...settings}>
                      {findCategory.map((elem) =>
                        elem.images.map((imgs) => (
                          <div>
                            <img
                              className={styles.slider_img}
                              src={imgs.image}
                            />
                          </div>
                        ))
                      )}
                    </Slider>
                  </div>
                </Col>
                <Col className={styles.col2} lg={7} md={12} sm={12} sx={12}>
                  {findCategory.map((elem) => (
                    <div className={styles.slider_сontent}>
                      <h3 className={styles.product_title}>
                        {LangVal() == "ru"
                          ? elem.title_ru
                          : LangVal() == "uz"
                          ? elem.title_uz
                          : elem.title_ru}
                      </h3>
                      <h3>{t("Products.1")}</h3>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.2")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.product_type_ru
                            : LangVal() == "uz"
                            ? elem.product_type_uz
                            : elem.product_type_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.3")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.completeness_ru
                            : LangVal() == "uz"
                            ? elem.completeness_uz
                            : elem.completeness_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.4")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.purpose_ru
                            : LangVal() == "uz"
                            ? elem.purpose_uz
                            : elem.purpose_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.5")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.color_ru
                            : LangVal() == "uz"
                            ? elem.color_uz
                            : elem.color_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.6")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.main_fabric_ru
                            : LangVal() == "uz"
                            ? elem.main_fabric_uz
                            : elem.main_fabric_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.7")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.compound_ru
                            : LangVal() == "uz"
                            ? elem.compound_uz
                            : elem.compound_ru}
                        </span>
                      </p>
                      <p>
                        <span className={styles.product_key}>
                          {t("Products.8")}
                        </span>
                        <span className={styles.product_info}>
                          {LangVal() == "ru"
                            ? elem.guarante_period_ru
                            : LangVal() == "uz"
                            ? elem.guarante_period_uz
                            : elem.guarante_period_ru}
                        </span>
                      </p>
                    </div>
                  ))}
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
