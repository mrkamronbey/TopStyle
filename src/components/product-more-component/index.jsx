import React from "react";
import styles from "./styled.module.css";
import More from "./more";
import Category from "../category";
import LikeProduct from "./like-product";

const ProductMoreComponent = () => {
  return (
    <>
      <div className={styles.more_wrapper}>
        <Category />
        <More />
        <LikeProduct />
      </div>
    </>
  );
};

export default ProductMoreComponent;
