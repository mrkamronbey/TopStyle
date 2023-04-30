import React from "react";
import styles from "./styled.module.css";
import Category from "../category";
import { BigContainer } from "../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import contact1 from "../../assets/contact/contact1.png";
import contact2 from "../../assets/contact/contact2.png";
import contact3 from "../../assets/contact/contact3.png";
import contact4 from "../../assets/contact/contact4.png";
import contact5 from "../../assets/contact/contact5.png";
import contact6 from "../../assets/contact/contact6.png";
import contact7 from "../../assets/contact/contact7.png";
import contact8 from "../../assets/contact/contact8.png";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.contact_section}>
        <Category />
        <BigContainer>
          <div className={styles.row_wrap}>
            <Row className={styles.row}>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.choose_title}>
                  <h2>{t("Contact.0")}</h2>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.call_box}>
                  <h4>{t("Contact.2")}</h4>
                  <p>
                    <a
                      className={styles.contact_link}
                      href="tel:+998 (93) 908-70-85"
                    >
                      <img src={contact1} alt="" />
                      <span>+998 (93) 908-70-85</span>
                    </a>
                  </p>
                  <p>
                    <a
                      className={styles.contact_link}
                      href="tel:+998 (99) 247-97-74"
                    >
                      <img src={contact1} alt="" />
                      <span>+998 (99) 247-97-74</span>
                    </a>
                  </p>
                </div>
                <div className={styles.call_box}>
                  <h4>{t("Contact.3")}</h4>
                  <p>
                    <img src={contact2} alt="" />
                    <span>{t("Contact.7")}</span>
                  </p>
                  <p>
                    <img src={contact3} alt="" />
                    <span>{t("Contact.4")}</span>
                  </p>
                </div>
                <div className={styles.call_box}>
                  <h4>{t("Contact.5")}</h4>
                  <p className={styles.contact_p}>
                    <img src={contact4} alt="" />
                    <span>{t("Contact.6")}</span>
                  </p>
                </div>
              </Col>
              <Col className={styles.col} lg={6} md={6} sm={12} sx={12}>
                <div className={styles.choose_title}>
                  <h2>{t("Contact.1")}</h2>
                  <div className={styles.line}></div>
                </div>

                <div className={styles.social_media}>
                  <p>
                    <a
                      className={styles.contact_link}
                      href="t.me/top_style_group"
                    >
                      <img src={contact5} alt="" />
                      <span>t.me/top_style_group</span>
                    </a>
                  </p>
                  <p>
                    <a
                      className={styles.contact_link}
                      href="https://instagram.com/top_style_group"
                    >
                      <img src={contact6} alt="" />
                      <span>instagram.com/top_style_group</span>
                    </a>
                  </p>
                  <p>
                    <a className={styles.contact_link} href="">
                      <img
                        src={contact7}
                        alt="https://fb.com/top_style_group"
                      />
                      <span>fb.com/top_style_group</span>
                    </a>
                  </p>
                  <p>
                    <a
                      className={styles.contact_link}
                      href="t.me/top_style_group_bot"
                    >
                      <img src={contact8} alt="" />
                      <span>t.me/top_style_group_bot</span>
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default ContactUs;
