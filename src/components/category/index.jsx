import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styled.module.css";
import { useTranslation } from "react-i18next";
import Icons from "../../assets/home/categoryicon.png";
import { CategoryGet } from "../../redux/category";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useEffect } from "react";

const Category = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categoryGets = useSelector((state) => state.category.categoryGet.data);
  console.log(categoryGets);
  useEffect(() => {
    dispatch(CategoryGet());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  return (
    <>
      <div className={styles.category_wrapper}>
        <h4 className={styles.category_title}>
          <i class="bx bx-menu-alt-left"></i>
          {t("Category.0")}
        </h4>
        <ul className={styles.category_list}>
          {categoryGets.map((elem) => (
            <li>
              <NavLink className={styles.drop_link} to={`/products`}>
                <img src={Icons} alt="Icons" />
                <span>
                  {LangVal() == "ru"
                    ? elem.category_name_ru
                    : LangVal() == "uz"
                    ? elem.category_name_uz
                    : elem.category_name_ru}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
