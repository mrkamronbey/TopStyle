import React from "react";
import styles from "./styled.module.css";
import CompanyAbout from "./company-about";
import Category from "../category/index";
import TopStyle from "./top-style";
import Partner from "../partner/index";
import ClientSlider from "./clinet-slider";

const AboutMe = () => {
  return (
    <>
      <div className={styles.about_wrapper}>
        <Category />
        <CompanyAbout />
        <TopStyle />
        <Partner />
        <ClientSlider />
      </div>
    </>
  );
};

export default AboutMe;
