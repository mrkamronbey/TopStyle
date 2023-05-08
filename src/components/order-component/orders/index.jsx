import React, { useState } from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import Input from "../../../common/input";
import { Button } from "../../../common/button/styled-index";
import { PostContact } from "../../../redux/form";
import { useDispatch } from "react-redux";

import Order1 from "../../../assets/order/order1.png";
import Order2 from "../../../assets/order/order2.png";

const Orders = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  // console.log(name, phone);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
      })
    );
  };
  console.log({
    name: name,
    phone_number: phone,
  });
  return (
    <>
      <div className={styles.orders_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <div className={styles.choose_title}>
              <h2>{t("Order.0")}</h2>
              <div className={styles.line}></div>
            </div>
            <h4 className={styles.order_card_titles}>{t("Order.1")}</h4>
            <Row className={styles.row}>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_content}>
                    <h4>{t("Order.2")}</h4>
                    <ol>
                      <li>
                        <p>{t("Order.3")}</p>
                      </li>
                      <li>
                        <p>{t("Order.4")}</p>
                      </li>
                      <li>
                        <p>{t("Order.5")}</p>
                      </li>
                      <li>
                        <p>{t("Order.6")}</p>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.order_img}>
                    <img src={Order1} alt="order_img" />
                  </div>
                </div>
              </Col>
            </Row>
            <h4 className={styles.order_card_titles1}>{t("Order.7")}</h4>
            <Row className={styles.row}>
              <Col className={styles.col} lg={12} md={12} sm={12} sx={12}>
                <div className={styles.order_card}>
                  <div className={styles.order_img}>
                    <img src={Order2} alt="" />
                  </div>
                  <div className={styles.order_contents}>
                    <p className={styles.margins}>{t("Order.8")}</p>
                    <p>{t("Order.9")}</p>
                    <p>{t("Order.10")}</p>
                    <p>{t("Order.11")}</p>
                  </div>
                </div>
              </Col>
            </Row>

            <div className={styles.order_from_wrapper}>
              <h2 className={styles.form_title}>{t("Order.12")}</h2>
              <form onSubmit={HandleSubmit} className={styles.order_form}>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={t("Order.13")}
                />
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder={t("Order.14")}
                />
                <Button
                  type="submit"
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
