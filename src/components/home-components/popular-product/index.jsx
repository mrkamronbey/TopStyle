import React, { useEffect } from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import Product1 from "../../../assets/home/popularpor.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductGet } from "../../../redux/product";

const PopularProduct = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductGet());
  }, []);

  const productGets = useSelector((state) => state.product.productGet?.data);

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  return (
    <>
      <div className={styles.popular_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("Home.12")}</h2>
              <div className={styles.line}></div>
            </div>
            <Row className={styles.row}>
              {productGets.map((card) => (
                <Col lg={4} md={6} sm={12} sx={12}>
                  <div className={styles.product_card}>
                    <NavLink
                      className={styles.params_link}
                      to={`/productmore/${card.id}`}
                    >
                      <img src={card.images.slice(0, 1).map((imgs) => imgs.image)} alt="" />
                      <h4>
                        {LangVal() == "ru"
                          ? card.title_ru
                          : LangVal() == "uz"
                          ? card.title_uz
                          : card.title_ru}
                      </h4>
                    </NavLink>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default PopularProduct;
