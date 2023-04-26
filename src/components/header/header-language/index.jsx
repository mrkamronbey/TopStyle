import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";
import { useState } from "react";
import RusLogo from "../../../assets/header/ru-logo.svg";
import UzbLogo from "../../../assets/header/uz-flag.png";

function LanguageHeader({ HandleClick }) {
  const { t, i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Wrapper>
      {LanguValue() === "ru" ? (
        <img src={RusLogo} width={24} height={18} alt="" />
      ) : LanguValue() === "uz" ? (
        <img src={UzbLogo} width={24} height={18} alt="" />
      ) : null}
      <select onChange={handleLang}>
        {LanguValue() === "ru" ? (
          <>
            <option value="ru">RU </option>
            <option value="uz">UZ</option>
          </>
        ) : LanguValue() === "uz" ? (
          <>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </>
        ) : (
          <>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </>
        )}
      </select>
    </Wrapper>
  );
}
export default LanguageHeader;
