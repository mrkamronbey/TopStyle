import React from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import LogoCard1 from "../../../assets/contact/1.png";
import LogoCard2 from "../../../assets/contact/2.png";
import LogoCard3 from "../../../assets/contact/3.jpg";

const ExampleWork = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.example_section}>
      <BigContainer>
        <div className={styles.row_wrap}>
          <div className={styles.choose_title}>
            <h2>{t("Order.16")}</h2>
            <div className={styles.line}></div>
          </div>
          <Row className={styles.row}>
            <Col className={styles.col} lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={LogoCard1} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={LogoCard2} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={LogoCard3} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </BigContainer>
    </div>
  );
};

export default ExampleWork;
