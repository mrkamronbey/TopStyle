import React, {useEffect} from "react";
import ContactUs from "../../components/contactus";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ContactUs />
    </>
  );
};

export default Contact;
