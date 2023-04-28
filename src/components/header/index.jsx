import { useState } from "react";
import HeaderBottom from "./header-bottom";
import HeaderMobile from "./header-mobile";
import styles from './style.module.css'
import HeaderTop from "./header-top";
function Header() {
  const [HeaderHamburger, setHamburger] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <HeaderTop />
        <HeaderBottom
          HandleOpen2={() => setHamburger(true)}
          HandleClose2={() => setHamburger(true)}
        />
        <HeaderMobile
          open={HeaderHamburger}
          HandleClose2={() => setHamburger(false)}
        />
      </div>
    </>
  );
}
export default Header;
