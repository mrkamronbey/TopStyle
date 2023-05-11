import React, { useEffect, useRef, useState } from "react";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Input from "../../../common/input";
import { Button } from "../../../common/button/styled-index";
import Call from "../../../assets/footer/calling.png";
import User from "../../../assets/footer/user.png";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { PostContact, GetContact } from "../../../redux/form";

const Location = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameDesktop, setNameDesktop] = useState("");
  const [phoneDesktop, setPhoneDesktop] = useState("");

  const [disableds, setDisableds] = useState(true);
  const [disabledDesk, setDisabledDesk] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactPost = useSelector((state) => state.contact);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const HandleSubmitPhone = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        name: name,
        phone_number: phone,
      })
    );
    dispatch(GetContact());
  };
  const HandleSubmitDesktop = async (e) => {
    e.preventDefault();
    const body = {
      name: nameDesktop,
      phone_number: phoneDesktop,
    };
    await dispatch(PostContact(body));
    dispatch(GetContact());
    name.target.value = "";
    nameDesktop.target.value = "";
  };

  useEffect(() => {
    phoneDesktop.length == 0 || nameDesktop.length == 2
      ? setDisableds(true)
      : setDisableds(false);
  }, [phoneDesktop]);
  useEffect(() => {
    phone.length == 0 || name.length == 2
      ? setDisabledDesk(true)
      : setDisabledDesk(false);
  }, [phone]);
  // if(contactPost.postContact.Success == true) {
  //   setName('')
  //   setNameDesktop('')
  //   setPhone('')
  //   setPhoneDesktop('')
  // }

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  return (
    <>
      <div className={styles.location_wrapper}>
        {/* modal */}
        <Modal
          footer={false}
          className="modals"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="boxx">
            {contactPost.postContact.Success == true ? (
              <p>
                {t("Order.19")}

                <i class="bx bxs-check-circle bx-burst"></i>
              </p>
            ) : null}
          </div>
        </Modal>
        {/* modal */}
        <div className={styles.none_form}>
          <div className={styles.position_boxs}>
            <div className={styles.from_wrapper}>
              <h2 className={styles.form_title}>{t("Footer.11")}</h2>
              <form onSubmit={HandleSubmitPhone} className={styles.form}>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("Footer.12")}
                  icon={
                    <img className={styles.input_img} src={User} alt="User" />
                  }
                  required
                  styleInput={{
                    border: "none",
                    padding: "11px 10px 11px 35px",
                    borderBottom: "2px solid #fff",
                    background: "transparent",
                    borderRadius: "0",
                    color: "#FFFFFF",
                  }}
                />
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  icon={
                    <img className={styles.input_img} src={Call} alt="Call" />
                  }
                  required
                  placeholder={t("Footer.13")}
                  type="number"
                  styleInput={{
                    padding: "11px 10px 11px 35px",
                    border: "none",
                    borderBottom: "2px solid #fff",
                    background: "transparent",
                    borderRadius: "0",
                    color: "#FFFFFF",
                  }}
                />
                {name.length == 2 ? (
                  LangVal() == "ru" ? (
                    <p>Ваше имя должно состоять из 3 и более символов</p>
                  ) : LangVal() == "uz" ? (
                    <p>
                      Ismingiz 3 va undan ortiq belgidan iborat bo'lishi kerak
                    </p>
                  ) : (
                    <p>Ваше имя должно состоять из 3 и более символов</p>
                  )
                ) : null}

                <Button
                  onClick={showModal}
                  disabled={disabledDesk}
                  style={{
                    background: "#03544c",
                    borderRadius: "30px",
                    border: "none",
                    textAlign: "center",
                    padding: "14px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                    fontSize: "16px",
                    marginTop: "20px",
                    width: "100%",
                  }}
                  type="submit"
                >
                  {t("Footer.14")}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.position_box}>
          <div className={styles.from_wrapper}>
            <h2 className={styles.form_title}>{t("Footer.11")}</h2>
            <form onSubmit={HandleSubmitDesktop} className={styles.form}>
              <Input
                onChange={(e) => setNameDesktop(e.target.value)}
                placeholder={t("Footer.12")}
                icon={
                  <img className={styles.input_img} src={User} alt="User" />
                }
                required
                styleInput={{
                  border: "none",
                  padding: "11px 10px 11px 35px",
                  borderBottom: "2px solid #fff",
                  background: "transparent",
                  borderRadius: "0",
                  color: "#FFFFFF",
                }}
              />
              <Input
                onChange={(e) => setPhoneDesktop(e.target.value)}
                icon={
                  <img className={styles.input_img} src={Call} alt="Call" />
                }
                placeholder={t("Footer.13")}
                required
                type="number"
                styleInput={{
                  padding: "11px 10px 11px 35px",
                  border: "none",
                  borderBottom: "2px solid #fff",
                  background: "transparent",
                  borderRadius: "0",
                  color: "#FFFFFF",
                }}
              />
              {nameDesktop.length == 2 ? (
                LangVal() == "ru" ? (
                  <p>Ваше имя должно состоять из 3 и более символов</p>
                ) : LangVal() == "uz" ? (
                  <p>
                    Ismingiz 3 va undan ortiq belgidan iborat bo'lishi kerak
                  </p>
                ) : (
                  <p>Ваше имя должно состоять из 3 и более символов</p>
                )
              ) : null}

              <Button
                onClick={showModal}
                disabled={disableds}
                type="submit"
                style={{
                  width: "100%",
                  background: "#03544c",
                  borderRadius: "30px",
                  border: "none",
                  textAlign: "center",
                  padding: "14px",
                  fontFamily: "Rubik",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                {t("Footer.14")}
              </Button>
            </form>
          </div>
        </div>

        

        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.183620%2C41.288647&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTQ1MjQ3EkZPyrt6YmVraXN0b24sIFRvc2hrZW50LCBVY2h0ZXBhIHR1bWFuaSwgQ2hpbG9uem9yIGRhaGFzaSwgMTMtbWF2emUsIDNBIgoNCl6KQhV-JyVC&z=18.86"
          width="100%"
          height="550"
          frameborder="1"
          allowfullscreen="true"
          style={{ position: "relative", border: "0" }}
        ></iframe>
        <div className={styles.btn_wrap}>
          <Button
            style={{
              position: "absolute",
              top: "50px",
              right: "5px",
              backdropFilter: "blur(2px)",
              background: "rgba(40, 40, 40, 0.6)",
              borderRadius: "10px",
              border: "none",
              textAlign: "center",
              padding: "14px",
              marginTop: "20px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                fontFamily: "Rubik",
                fontWeight: "400",
                fontSize: "16px",
                color: "#fff",
              }}
              href="https://yandex.uz/map-widget/v1/?ll=69.183620%2C41.288647&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTQ1MjQ3EkZPyrt6YmVraXN0b24sIFRvc2hrZW50LCBVY2h0ZXBhIHR1bWFuaSwgQ2hpbG9uem9yIGRhaGFzaSwgMTMtbWF2emUsIDNBIgoNCl6KQhV-JyVC&z=18.86"
            >
              {t("Footer.15")}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Location;
