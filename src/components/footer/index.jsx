import React from "react";
import Location from "./location";
import { WrapperContainer } from "../../styled-app";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
// image import
import Logo from "../../assets/header/logo.png";
import Telegram from "../../assets/footer/lighttg.png";
import Instagram from "../../assets/footer/lightinst.png";
import YouTube from "../../assets/footer/lightyou.png";
import Facebook from "../../assets/footer/lightface.png";
import { width } from "@mui/system";
// image import

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Location />
      <div className={styles.section}>
        <WrapperContainer>
          <Row className={styles.row}>
            <Col className={styles.col} lg={4} md={6} sx={12} sm={6}>
              <div className={styles.logo_box}>
                <img src={Logo} alt="logo" />
                <p>{t("Footer.0")}</p>
                <div className={styles.social_box}>
                  <a href="#">
                    <img src={Telegram} alt="Telegram" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={YouTube} alt="YouTube" />
                  </a>
                  <a href="#">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </Col>
            <Col className={styles.col} lg={4} md={6} sx={12} sm={6}>
              <ul className={styles.footer_list}>
                <li>
                  <a className={styles.item_link} href="/">
                    {t("Footer.1")}
                  </a>
                </li>
                <li>
                  <a className={styles.item_link} href="#">
                    {t("Footer.2")}
                  </a>
                </li>
                <li>
                  <a className={styles.item_link} href="/createlogo">
                    {t("Footer.3")}
                  </a>
                </li>
                <li>
                  <a className={styles.item_link} href="aboutme">
                    {t("Footer.4")}
                  </a>
                </li>
                <li>
                  <a className={styles.item_link} href="/contact">
                    {t("Footer.5")}
                  </a>
                </li>
              </ul>
            </Col>
            <Col className={styles.col} lg={4} md={12} sx={12} sm={12}>
              <div className={styles.me_footer}>
                <h4>{t("Footer.6")}</h4>
                <p className={styles.me_text}>
                  <a href="tel:+998 93 908 70 85">+998 93 908 70 85</a> <br />
                  <a href="tel:+998 99 247 97 74">+998 99 247 97 74</a>
                </p>
                <h4>{t("Footer.7")}</h4>
                <p className={styles.me_text}>{t("Footer.8")}</p>
                <h4>{t("Footer.9")}</h4>
                <p style={{ maxWidth: "200px" }} className={styles.me_text}>
                  {t("Footer.10")}
                </p>
              </div>
            </Col>
          </Row>
        </WrapperContainer>
      </div>
    </>
  );
};

export default Footer;
