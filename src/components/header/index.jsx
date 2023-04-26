import { useState } from "react";
import HeaderBottom from "./header-bottom";
import HeaderMobile from "./header-mobile";
import { Wrapper } from "./styled-index";
import HeaderTop from "./header-top";
function Header() {
  const [HeaderHamburger, setHamburger] = useState(false);
  return (
    <>
      <Wrapper>
        <HeaderTop />
        <HeaderBottom
          HandleOpen2={() => setHamburger(true)}
          HandleClose2={() => setHamburger(true)}
        />
        <HeaderMobile
          open={HeaderHamburger}
          HandleClose2={() => setHamburger(false)}
        />
      </Wrapper>
    </>
  );
}
export default Header;
