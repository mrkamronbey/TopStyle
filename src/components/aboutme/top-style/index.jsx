import React from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";

import companyicon1 from "../../../assets/about/companyicon1.png";
import companyicon2 from "../../../assets/about/companyicon2.png";
import companyicon3 from "../../../assets/about/companyicon3.png";

const TopStyle = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.top_style_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("About.6")}</h2>
              <div className={styles.line}></div>
            </div>
            <div className={styles.ol_wrap}>
              <ol>
                <li>
                  <p>{t("About.7")}</p>
                </li>
                <li>
                  <p>{t("About.8")}</p>
                </li>
                <li>
                  <p>{t("About.9")}</p>
                </li>
                <li>
                  <p>{t("About.10")}</p>
                </li>
                <li>
                  <p>{t("About.11")}</p>
                </li>
                <li>
                  <p>{t("About.12")}</p>
                </li>
                <li>
                  <p>{t("About.13")}</p>
                </li>
                <li>
                  <p>{t("About.14")}</p>
                </li>
                <li>
                  <p>{t("About.15")}</p>
                </li>
              </ol>
            </div>

            <Row className={styles.row}>
              <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                <div className={styles.top_style_card}>
                  <div className={styles.top_style_card_title}>
                    <div className={styles.titles}>
                      <img src={companyicon1} alt="" />
                      <h4>{t("About.16")}</h4>
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <p>{t("About.19")}</p>
                </div>
              </Col>
              <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                <div className={styles.top_style_card}>
                  <div className={styles.top_style_card_title}>
                    <div className={styles.titles}>
                      <img src={companyicon2} alt="" />
                      <h4>{t("About.17")}</h4>
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <p>{t("About.20")}</p>
                </div>
              </Col>
              <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                <div className={styles.top_style_card}>
                  <div className={styles.top_style_card_title}>
                    <div className={styles.titles}>
                      <img src={companyicon3} alt="" />
                      <h4>{t("About.18")}</h4>
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <p>{t("About.21")}</p>
                </div>
              </Col>
            </Row>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default TopStyle;
