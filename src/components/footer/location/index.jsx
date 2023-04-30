import React from "react";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Input from "../../../common/input";
import { Button } from "../../../common/button/styled-index";
import Call from "../../../assets/footer/calling.png";
import User from "../../../assets/footer/user.png";
import "./style.css";

const Location = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.location_wrapper}>
        <div className={styles.none_form}>
          <div className={styles.position_boxs}>
            <div className={styles.from_wrapper}>
              <h2 className={styles.form_title}>{t("Footer.11")}</h2>
              <form className={styles.form}>
                <Input
                  placeholder={t("Footer.12")}
                  icon={
                    <img className={styles.input_img} src={User} alt="User" />
                  }
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
                  icon={
                    <img className={styles.input_img} src={Call} alt="Call" />
                  }
                  placeholder={t("Footer.13")}
                  styleInput={{
                    padding: "11px 10px 11px 35px",
                    border: "none",
                    borderBottom: "2px solid #fff",
                    background: "transparent",
                    borderRadius: "0",
                    color: "#FFFFFF",
                  }}
                />

                <Button
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
                  }}
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
            <form className={styles.form}>
              <Input
                placeholder={t("Footer.12")}
                icon={
                  <img className={styles.input_img} src={User} alt="User" />
                }
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
                icon={
                  <img className={styles.input_img} src={Call} alt="Call" />
                }
                placeholder={t("Footer.13")}
                styleInput={{
                  padding: "11px 10px 11px 35px",
                  border: "none",
                  borderBottom: "2px solid #fff",
                  background: "transparent",
                  borderRadius: "0",
                  color: "#FFFFFF",
                }}
              />
              <Button
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
                }}
              >
                {t("Footer.14")}
              </Button>
            </form>
          </div>
        </div>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&mode=search&sll=69.279737%2C41.311151&sspn=0.302811%2C0.133314&text=7days&z=12"
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
              href="https://yandex.uz/maps/10335/tashkent/search/7days/?ll=69.279737%2C41.311151&sll=69.279737%2C41.311151&sspn=0.302811%2C0.133314&z=12"
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
