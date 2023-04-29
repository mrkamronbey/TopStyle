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
        <div className={styles.more_bg}>
          <More />
          <LikeProduct />
        </div>
      </div>
    </>
  );
};

export default ProductMoreComponent;
