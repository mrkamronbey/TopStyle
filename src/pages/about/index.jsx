import React, {useEffect} from "react";
import styles from "./styled.module.css";
import AboutMe from "../../components/aboutme";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AboutMe />
    </>
  );
};

export default About;
