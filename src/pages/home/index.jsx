import React, {useEffect} from "react";
import HomeComponent from "../../components/home-components";
import styles from "./styled.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className={styles.wrapper_home}>
        <HomeComponent />
      </div>
    </>
  );
};

export default Home;
