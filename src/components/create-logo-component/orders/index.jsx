import React, { useEffect, useRef, useState } from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import Input from "../../../common/input";
import { Button } from "../../../common/button/styled-index";
import { Modal } from "antd";
import { PostContact, GetContact } from "../../../redux/form";
import { useDispatch, useSelector } from "react-redux";

import LogoCard1 from "../../../assets/create_logo/logocards1.jpg";
import LogoCard2 from "../../../assets/create_logo/logocards2.jpg";
import LogoCard3 from "../../../assets/create_logo/logocards3.jpg";
import LogoCard4 from "../../../assets/partner/logocard3.png";

const Orders = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [disableds, setDisableds] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
      })
    );
    dispatch(GetContact());
  };
  const contactPost = useSelector((state) => state.contact);

  useEffect(() => {
    phone.length == 0 ? setDisableds(true) : setDisableds(false);
  }, [phone]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={styles.orders_section}>
        {/* modal */}
        <Modal
          footer={false}
          className="modals"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="boxx">
            {
              contactPost.postContact.Success == true ? (
                <p>
                  {t("Order.19")}

                  <i class="bx bxs-check-circle"></i>
                </p>
              ) : null
              // <p>
              //   {t("Order.18")} <i class="bx bx-error"></i>
              // </p>
            }
          </div>
        </Modal>
        {/* modal */}
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
              <form onSubmit={HandleSubmit} className={styles.order_form}>
                <Input
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("Order.13")}
                />
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder={t("Order.14")}
                  type="number"
                />
                <Button
                  type="submit"
                  onClick={showModal}
                  disabled={disableds}
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
