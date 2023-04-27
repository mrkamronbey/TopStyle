import React from "react";

import News from "./news";
import ProductHome from "./product-home";
import ChooseUs from "./chooseus";
import styles from "./styled.module.css";
import Category from "../category";
import PopularProduct from "./popular-product";
import OurProduct from "./ourproduct";

const HomeComponent = () => {
  return (
    <div className={styles.homecomp_wrapper}>
      <Category />
      <News />
      <div className={styles.chooseBg}>
        {/* <ProductHome /> */}
        <ChooseUs />
      </div>
      <PopularProduct />
      <OurProduct />
    </div>
  );
};

export default HomeComponent;
