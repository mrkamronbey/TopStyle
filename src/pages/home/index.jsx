import React from "react";
import HomeComponent from "../../components/home-components";
import styles from "./styled.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper_home}>
        <HomeComponent />
      </div>
    </>
  );
};

export default Home;
