import React from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import Order3 from '../../../assets/order/order3.png'
import Order4 from '../../../assets/order/order4.png'
import Order5 from '../../../assets/order/order5.png'

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
            <Col lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={Order3} alt="" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={Order4} alt="" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={Order5} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </BigContainer>
    </div>
  );
};

export default ExampleWork;
