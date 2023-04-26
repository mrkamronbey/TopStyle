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
          <Row>
            <Col lg={6} md={6} sx={6} sm={6}>
              <div className={styles.social}>
                <p>{t("Header.0")}</p>
                <div className={styles.social_media}>
                  <a href="https://telegram.com">
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="https://youtube.com">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href="https://facebook.com">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sx={6} sm={6}>
              <div className={styles.wrapp}>
                <div className={styles.phone_box}>
                  <a href="tel:+998 (93) 908-70-85">+998 (93) 908-70-85</a>
                  <a href="tel:+998 (99) 247-97-74">+998 (99) 247-97-74</a>
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
