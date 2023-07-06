import React, { useEffect } from "react";
import { BigContainer } from "../../../styled-app";
import styles from "./styled.module.css";
import { Row, Col } from "react-grid-system";
import Product1 from "../../../assets/home/popularpor.png";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductGet } from "../../../redux/product";
import { CategoryGet } from "../../../redux/category";
import { InboxOutlined } from "@ant-design/icons";

const PopularProduct = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductGet());
  }, []);
  useEffect(() => {
    dispatch(CategoryGet());
  }, []);

  const productGets = useSelector((state) => state.product.productGet?.data);
  const categoryGets = useSelector((state) => state.category.categoryGet.data);
  const filterCategory = productGets.filter((elem) => elem.category.id == id);

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  return (
    <>
      <div className={styles.popular_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            {filterCategory ? (
              <>
                <div className={styles.choose_title}>
                  {filterCategory.map((e) => (
                    <h2>
                      {LangVal() == "ru"
                        ? e.category.category_name_ru
                        : LangVal() == "uz"
                        ? e.category.category_name_uz
                        : e.category.category_name_ru}
                    </h2>
                  ))}

                  <div className={styles.line}></div>
                </div>
                <Row className={styles.row}>
                  {filterCategory.map((product) => (
                    <Col className={styles.col} lg={4} md={6} sm={12} sx={12}>
                      <div className={styles.product_card}>
                        <NavLink
                          className={styles.params_link}
                          to={`/productmore/${product.id}`}
                        >
                          <img
                            src={product.images
                              .slice(0, 1)
                              .map((imgs) => imgs.image)}
                            alt=""
                          />
                          <h4>
                            {LangVal() == "ru"
                              ? product.title_ru
                              : LangVal() == "uz"
                              ? product.title_uz
                              : product.title_ru}
                          </h4>
                        </NavLink>
                      </div>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <div className={styles.no_data_box}>
                <InboxOutlined className={styles.ant_icons} />
                <h4>{t("Products.10")}</h4>
              </div>
            )}
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default PopularProduct;
