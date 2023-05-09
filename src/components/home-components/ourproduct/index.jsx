import React from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import OurPro1 from "../../../assets/home/ourpro1.png";
import OurPro2 from "../../../assets/home/ourpro2.png";
import Arrow from "../../../assets/home/arrow.png";
import { NavLink } from "react-router-dom";

const OurProduct = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.ourproduct_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("Home.13")}</h2>
              <div className={styles.line}></div>
            </div>
            <Row className={styles.row}>
              <Col lg={12} md={12} sm={12} sx={12}>
                <div className={styles.ourproduct_card}>
                  <div className={styles.our_img}>
                    <img src={OurPro1} alt="" />
                  </div>
                  <div className={styles.our_content}>
                    <h4>{t("Home.14")}</h4>
                    <p>{t("Home.15")}</p>
                    <div className={styles.our_link}>
                      <NavLink to="/createlogo">
                        <span>{t("Home.18")}</span>
                        <img src={Arrow} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} sx={12}>
                <div className={styles.ourproduct_card}>
                  <div className={styles.our_content}>
                    <h4>{t("Home.16")}</h4>
                    <p>{t("Home.17")}</p>
                    <div className={styles.our_link}>
                      <NavLink to="/order">
                        <span>{t("Home.18")}</span>
                        <img src={Arrow} alt="" />
                      </NavLink>
                    </div>
                  </div>
                  <div className={styles.our_img}>
                    <img src={OurPro2} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default OurProduct;
