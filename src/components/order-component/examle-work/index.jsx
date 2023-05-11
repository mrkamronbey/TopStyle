import React, {useEffect} from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ProductGet } from "../../../redux/product";
import './styles.css'

const ExampleWork = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductGet());
  }, []);

  const productGets = useSelector((state) => state.product.productGet?.data);
  return (
    <div className={styles.example_section}>
      <BigContainer>
        <div className={styles.row_wrap}>
          <div className={styles.choose_title}>
            <h2>{t("Order.16")}</h2>
            <div className={styles.line}></div>
          </div>
          <Row className={styles.row}>
            {productGets.slice(0,3).map((elem) => (
              <Col className="col" lg={4} md={6} sm={12} sx={12}>
                <div className={styles.example_card}>
                  <NavLink  to={`/productmore/${elem.id}`}>
                    <img src={elem.images.slice(0, 1).map((imgs) => imgs.image)} alt="" />
                  </NavLink>
                </div>
              </Col>
            ))}

            {/* <Col lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={Order4} alt="" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} sx={12}>
              <div className={styles.example_card}>
                <img src={Order5} alt="" />
              </div>
            </Col> */}
          </Row>
        </div>
      </BigContainer>
    </div>
  );
};

export default ExampleWork;
