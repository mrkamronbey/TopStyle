import React from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { WrapperContainer } from "../../../styled-app";

import telegram from "../../../assets/header/telegram.png";
import instagram from "../../../assets/header/instagram.png";
import youtube from "../../../assets/header/youtube.png";
import facebook from "../../../assets/header/facebook.png";
import LanguageHeader from "../header-language";

const HeaderTop = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.header_wrapper}>
        <WrapperContainer>
          <Row className={styles.row}>
            <Col lg={6} md={6} sx={6} sm={6}>
              <div className={styles.social}>
                <p>{t("Header.0")}</p>
                <div className={styles.social_media}>
                  <a href="https://t.me/uniformachilonzor">
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a href="https://instagram.com/topstyle05">
                    <img src={instagram} alt="instagram" />
                  </a>
                  {/* <a href="https://youtube.com">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href="https://facebook.com">
                    <img src={facebook} alt="facebook" />
                  </a> */}
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sx={6} sm={6}>
              <div className={styles.wrapp}>
                <div className={styles.phone_box}>
                  <a href="tel:+998 (99) 822-33-35">+998 (99) 822-33-35</a>
                  <a href="tel:+998 (99) 858-67-27">+998 (99) 858-67-27</a>
                </div>
                <div className={styles.lang_box}>
                  <LanguageHeader />
                </div>
              </div>
            </Col>
          </Row>
        </WrapperContainer>
      </div>
    </>
  );
};

export default HeaderTop;
