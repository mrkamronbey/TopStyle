import React from "react";
import { Row, Col } from "react-grid-system";
import { NavLink } from "react-router-dom";
import Product from "../../../assets/home/product1.png";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { BigContainer } from "../../../styled-app";
const ProductHome = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.product_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <Row className={styles.row}>
              <Col lg={3}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.0")}{" "}
                  </NavLink>
                  <img src={Product} alt="" />
                </div>
              </Col>
              <Col lg={3}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.1")}{" "}
                  </NavLink>
                  <img src={Product} width="200px" alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.2")}{" "}
                  </NavLink>
                  <img src={Product} width="200px" alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.3")}{" "}
                  </NavLink>
                  <img src={Product} width="200px" alt="" />
                </div>
              </Col>
              <Col lg={3}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.4")}{" "}
                  </NavLink>
                  <img src={Product} width="200px" alt="" />
                </div>
              </Col>
              <Col lg={3}>
                <div className={styles.product_wrapper}>
                  <NavLink className={styles.links} to="#">
                    {t("Home.5")}{" "}
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
