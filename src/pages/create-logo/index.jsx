import React, {useEffect} from "react";
import styles from "./styled.module.css";
import CreateLogoComponent from "../../components/create-logo-component";

const CreateLogo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CreateLogoComponent />
    </>
  );
};

export default CreateLogo;
