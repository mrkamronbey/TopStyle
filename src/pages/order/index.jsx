import React, {useEffect} from "react";
import styles from "./styled.module.css";
import OrderComponent from "../../components/order-component";

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <OrderComponent />
    </>
  );
};

export default Order;
