import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Icons from "../../assets/home/categoryicon.png";
import './styles.css'
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Category = () => {
  const { t } = useTranslation();
  const items = [
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.1")}</span>
        </NavLink>
      ),
      key: "0",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.2")}</span>
        </NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.3")}</span>
        </NavLink>
      ),
      key: "3",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.4")}</span>
        </NavLink>
      ),
      key: "4",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.5")}</span>
        </NavLink>
      ),
      key: "5",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.6")}</span>
        </NavLink>
      ),
      key: "6",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.7")}</span>
        </NavLink>
      ),
      key: "7",
    },
    {
      label: (
        <NavLink className={styles.drop_link} to="#">
          <img src={Icons} alt="Icons" />
          <span>{t("Category.8")}</span>
        </NavLink>
      ),
      key: "8",
    },
  ];
  return (
    <>
      <div className={styles.category_dropdown}>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <i class="bx bx-menu-alt-left"></i>
              {t("Category.0")}
              {/* <DownOutlined /> */}
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className={styles.category_wrapper}>
        <h4 className={styles.category_title}>
          <i class="bx bx-menu-alt-left"></i>
          {t("Category.0")}
        </h4>
        <ul className={styles.category_list}>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.1")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.2")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.3")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.4")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.5")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.6")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
              <img src={Icons} alt="Icons" />
              <span>{t("Category.7")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.drop_link} to="#">
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
