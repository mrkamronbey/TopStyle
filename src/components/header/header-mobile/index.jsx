import React from "react";
import { Wrapper, Overlay } from "./styled-index";
import Logo from "../../../assets/header/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dataLink } from "./../../../utils/data-link";
import RusLogo from "../../../assets/header/ru-flag.svg";
import UzbLogo from "../../../assets/header/yz-flag.svg";
import EngLogo from "../../../assets/header/en-flag.svg";
import Telegram from "../../../assets/footer/lighttg.png";
import Instagram from "../../../assets/footer/lightinst.png";
import YouTube from "../../../assets/footer/lightyou.png";
import Facebook from "../../../assets/footer/lightface.png";
import styles from "../header-top/style.module.css";
function HeaderMobile({ open, HandleClose2 }) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.target.id;
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  return (
    <>
      <Wrapper open={open}>
        <div className="Top">
          <img src={Logo} alt="" />
          <span onClick={HandleClose2}>&times;</span>
        </div>
        <ul>
          {dataLink.map((elem, index) => (
            <li key={index}>
              <NavLink
                style={{ textDecoration: "none" }}
                onClick={() => HandleClose2()}
                to={elem.link}
              >
                <p>{t(elem.title)}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="socials">
          <div className="social_medias">
            <a href="https://t.me/uniformachilonzor">
              <img src={Telegram} alt="telegram" />
            </a>
            <a href="https://instagram.com/topstyle05">
              <img src={Instagram} alt="instagram" />
            </a>
            {/* <a href="https://youtube.com">
              <img src={YouTube} alt="youtube" />
            </a>
            <a href="https://facebook.com">
              <img src={Facebook} alt="facebook" />
            </a> */}
          </div>
        </div>
        <div className="flags">
          <button onClick={handleLang} id="ru">
            <img id="ru" src={RusLogo} width={25} height={20} alt="" />
          </button>
          <button onClick={handleLang} id="uz">
            <img id="uz" src={UzbLogo} width={25} height={20} alt="" />
          </button>
        </div>
      </Wrapper>
      <Overlay onClick={HandleClose2} open={open}></Overlay>
    </>
  );
}

export default HeaderMobile;
