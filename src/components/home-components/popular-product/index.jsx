import React from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import Product1 from "../../../assets/home/popularpor.png";
import { useTranslation } from "react-i18next";

const PopularProduct = () => {
  const { t } = useTranslation();

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              {arr.map(() => (
                <Col lg={4} md={6} sm={12} sx={12}>
                  <div className={styles.product_card}>
                    <img src={Product1} alt="" />
                    <h4>Куртка и полукомбинезон</h4>
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
