import { useState } from "react";
import { useLocation } from "react-router-dom";
import { WrapperContainer } from "../../../styled-app";
import { Section, Wrapper, MobileDiv } from "./styled-index";
import Logo from "../../../assets/header/logo.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Hamburger from "../../../assets/header/hamburger.svg";
import CloseIcon from "../../../assets/header/close-icon.svg";
import { dataLink } from "../../../utils/data-link";
import { HashLink } from "react-router-hash-link";
import LanguageHeader from '../header-language/index'
import styles from './style.module.css'

function HeaderBottom({ HandleOpen2 }) {
  const [open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose3 = () => setOpen(false);
  const pathname = useLocation();
  const { t, i18n } = useTranslation();

  return (
    <Section>
      <WrapperContainer>
        <Wrapper>
          <HashLink to={"/#home"} smooth>
            <img src={Logo} alt="" />
          </HashLink>

          <ul>
            {dataLink.map((elem, index) => (
              <li key={index}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={pathname == `${elem.link}` ? styles.active : styles.links}
                  to={elem.link}
                >
                  <p>{t(elem.title)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <MobileDiv>
            <img
              src={Hamburger}
              onClick={HandleOpen2}
              width={25}
              height={25}
              alt=""
            />
          </MobileDiv>
          
        </Wrapper>
      </WrapperContainer>
    </Section>
  );
}
export default HeaderBottom;
