import React from "react";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import Choose1 from "../../../assets/home/choose1.png";
import Choose2 from "../../../assets/home/choose2.png";
import Choose3 from "../../../assets/home/choose3.png";
import Choose4 from "../../../assets/home/choose4.png";
import { BigContainer } from "../../../styled-app";

const ChooseUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.choose_section}>
        <BigContainer>
          <div className={styles.choose_wrapp}>
            <div className={styles.wrapper_choose}>
              <div className={styles.choose_title}>
                <h2>{t("Home.6")}</h2>
                <div className={styles.line}></div>
              </div>
              <Row className={styles.row}>
                <Col lg={6} md={12} sx={12} sm={12}>
                  <div className={styles.choose_card}>
                    <div className={styles.card_img}>
                      <img src={Choose1} alt="" />
                    </div>
                    <div className={styles.card_content}>
                      <h4>{t("Home.7")}</h4>
                      <p>{t("Home.8")}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sx={12} sm={12}>
                  <div className={styles.choose_card}>
                    <div className={styles.card_img}>
                      <img src={Choose2} alt="" />
                    </div>
                    <div className={styles.card_content}>
                      <h4>{t("Home.9")}</h4>
                      <p>{t("Home.8")}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sx={12} sm={12}>
                  <div className={styles.choose_card}>
                    <div className={styles.card_img}>
                      <img src={Choose3} alt="" />
                    </div>
                    <div className={styles.card_content}>
                      <h4>{t("Home.10")}</h4>
                      <p>{t("Home.8")}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sx={12} sm={12}>
                  <div className={styles.choose_card}>
                    <div className={styles.card_img}>
                      <img src={Choose4} alt="" />
                    </div>
                    <div className={styles.card_content}>
                      <h4>{t("Home.11")}</h4>
                      <p>{t("Home.8")}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default ChooseUs;
