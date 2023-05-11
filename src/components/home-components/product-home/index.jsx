import React from "react";
import { Row, Col } from "react-grid-system";
import { NavLink } from "react-router-dom";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { BigContainer } from "../../../styled-app";
// image import
import Product from "../../../assets/category/1.png";
import Product1 from "../../../assets/category/2.png";
import Product2 from "../../../assets/category/3.png";
import Product3 from "../../../assets/category/4.png";
import Product4 from "../../../assets/category/5.png";
import Product5 from "../../../assets/category/6.png";
// image import

const ProductHome = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.product_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <Row className={styles.row}>
              <Col className={styles.col} lg={3} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.0")}
                  </NavLink>
                  <img src={Product5} alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={3} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.1")}
                  </NavLink>
                  <img src={Product1} width="200px" alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.2")}
                  </NavLink>
                  <img src={Product2} alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.3")}
                  </NavLink>
                  <img src={Product3} width="200px" alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={3} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.4")}
                  </NavLink>
                  <img src={Product4} width="200px" alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={3} md={6} sm={12} sx={12}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="/products">
                    {t("Home.5")}
                  </NavLink>
                  <img src={Product} width="200px" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default ProductHome;
