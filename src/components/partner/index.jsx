import React from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../styled-app";
import {Row, Col} from 'react-grid-system'
import { useTranslation } from "react-i18next";

// import img
import logo1 from '../../assets/partner/logo1.png'
import logo2 from '../../assets/partner/logo2.png'
import logo3 from '../../assets/partner/logo3.png'
import logo4 from '../../assets/partner/logo4.png'
import logo5 from '../../assets/partner/logo5.png'
import logo6 from '../../assets/partner/logo6.png'
import logo7 from '../../assets/partner/logo7.png'
import logo8 from '../../assets/partner/logo8.png'
import logo9 from '../../assets/partner/logo9.png'
import logo10 from '../../assets/partner/logo10.png'
import logo11 from '../../assets/partner/logo11.png'
import logo12 from '../../assets/partner/logo12.png'
import logo13 from '../../assets/partner/logo13.png'
import logo14 from '../../assets/partner/logo14.png'
import logo15 from '../../assets/partner/logo15.png'
import logo16 from '../../assets/partner/logo16.png'
import logo17 from '../../assets/partner/logo17.png'
import logo18 from '../../assets/partner/logo18.png'
import logo19 from '../../assets/partner/logo19.png'
// import img

const Partner = () => {
    const {t} = useTranslation()
  return (
    <div className={styles.partner_section}>
      <BigContainer>
        <div className={styles.row_wrap}>
          <div className={styles.choose_title}>
            <h2>{t("Order.17")}</h2>
            <div className={styles.line}></div>
          </div>
          <Row className={styles.row}>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo1} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo2} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo3} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo4} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo5} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo6} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo7} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo8} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo9} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo10} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo11} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo12} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo13} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo14} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo15} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo16} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo17} alt="" />
              </div>
            </Col>
            <Col className={styles.col} lg={2} md={2} sm={4} sx={4}>
              <div className={styles.partner_card}>
                <img src={logo18} alt="" />
              </div>
            </Col>
            {/* <Col className={styles.col} lg={2} md={2} sm={12} sx={12}>
              <div className={styles.partner_card}>
                <img src={logo19} alt="" />
              </div>
            </Col> */}
          </Row>
        </div>
      </BigContainer>
    </div>
  );
};

export default Partner;
