import React from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import Product1 from "../../../assets/home/popularpor.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { cardData } from "../../home-components/popular-product/data";

const PopularProduct = () => {
  const { t } = useTranslation();

  
  return (
    <>
      <div className={styles.popular_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("Products.0")}</h2>
              <div className={styles.line}></div>
            </div>
            <Row className={styles.row}>
              {cardData.map((card) => (
                <Col lg={4} md={6} sm={12} sx={12}>
                  <div className={styles.product_card}>
                    <NavLink className={styles.params_link} to={`/productmore/${card.id}`}>
                      <img src={Product1} alt="" />
                      <h4>{card.title}</h4>
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
