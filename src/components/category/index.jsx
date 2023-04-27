import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Icons from "../../assets/home/categoryicon.png";

const Category = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.category_wrapper}>
        <h4 className={styles.category_title}>
          <i class="bx bx-menu-alt-left"></i>
          {t("Category.0")}
        </h4>
        <ul className={styles.category_list}>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.1")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.2")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.3")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.4")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.5")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.6")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.7")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.8")}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Category;
