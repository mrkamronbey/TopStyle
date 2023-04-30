import React from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
// import { Col as Cols, Row as Rows, Statistic } from "antd";
// import CountUp from "react-countup";

import Company1 from "../../../assets/about/company1.png";
import Company2 from "../../../assets/about/company2.png";
import Company3 from "../../../assets/about/company3.png";
import LogoBlack from "../../../assets/about/logoblack.png";

const CompanyAbout = () => {
  const { t } = useTranslation();
  //   const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <>
      <div className={styles.company_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("About.0")}</h2>
              <div className={styles.line}></div>
            </div>
            <Row className={styles.row}>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.img_wrap}>
                  <img className={styles.big_img} src={Company1} alt="" />
                </div>
              </Col>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.img_wrap}>
                  <img className={styles.mini_img} src={Company2} alt="" />
                  <img className={styles.mini_img} src={Company3} alt="" />
                </div>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.content_wrap}>
                  <p>
                    {" "}
                    <span>Top Style Group</span> - {t("About.1")}
                  </p>
                </div>
              </Col>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.logo_wrap}>
                  <img className={styles.logo_img} src={LogoBlack} alt="" />
                  <p>{t("About.2")}</p>
                </div>
              </Col>
            </Row>
            <div className={styles.statistics}>
              <Row className={styles.row}>
                <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                    <div className={styles.count_wrap}>
                        <h4>8+</h4>
                        <p>{t("About.3")}</p>
                    </div>
                </Col>
                <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                    <div className={styles.count_wrap}>
                        <h4>250+</h4>
                        <p>{t("About.4")}</p>
                    </div>
                </Col>
                <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
                    <div className={styles.count_wrap}>
                        <h4>1200+</h4>
                        <p>{t("About.5")}</p>
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

export default CompanyAbout;
