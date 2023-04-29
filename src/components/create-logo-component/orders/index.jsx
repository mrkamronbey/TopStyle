import React from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import Input from "../../../common/input";
import { Button } from "../../../common/button/styled-index";

import LogoCard1 from "../../../assets/partner/logocard.png";
import LogoCard2 from "../../../assets/partner/logocard1.png";
import LogoCard3 from "../../../assets/partner/logocard2.png";
import LogoCard4 from "../../../assets/partner/logocard3.png";


const Orders = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.orders_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("Logo.0")}</h2>
              <div className={styles.line}></div>
            </div>

            <Row className={styles.row}>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_content}>
                    <h4>{t("Logo.1")}</h4>
                    <p>{t("Logo.2")}</p>
                  </div>
                  <div className={styles.order_img}>
                    <img src={LogoCard1} alt="order_img" />
                  </div>
                </div>
              </Col>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_img}>
                    <img src={LogoCard2} alt="" />
                  </div>
                  <div className={styles.order_contents}>
                    <h4>{t("Logo.3")}</h4>
                    <p>{t("Logo.4")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_content}>
                    <h4>{t("Logo.5")}</h4>
                    <p>{t("Logo.6")}</p>
                  </div>
                  <div className={styles.order_img}>
                    <img src={LogoCard3} alt="order_img" />
                  </div>
                </div>
              </Col>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_img}>
                    <img src={LogoCard4} alt="" />
                  </div>
                  <div className={styles.order_contents}>
                    <h4>{t("Logo.7")}</h4>
                    <p>{t("Logo.8")}</p>
                  </div>
                </div>
              </Col>
            </Row>

            <div className={styles.order_from_wrapper}>
              <h2 className={styles.form_title}>{t("Order.12")}</h2>
              <form className={styles.order_form}>
                <Input placeholder={t("Order.13")} />
                <Input placeholder={t("Order.14")} />
                <Button
                  style={{
                    background: "#03544c",
                    borderRadius: "10px",
                    border: "none",
                    textAlign: "center",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                    fontSize: "14px",
                    padding: "15px 70px",
                  }}
                >
                  {t("Footer.14")}
                </Button>
              </form>
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default Orders;
