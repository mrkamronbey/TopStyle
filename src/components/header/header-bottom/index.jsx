import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WrapperContainer } from "../../../styled-app";
import { Section, Wrapper, MobileDiv } from "./styled-index";
import headerlogo from "../../../assets/header/header_logo.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { dataLink } from "../../../utils/data-link";
import { HashLink } from "react-router-hash-link";
import styles from "./style.module.css";
import { Dropdown, Space } from "antd";
import Icons from "../../../assets/home/categoryicon.png";
import "./styles.css";
import { CategoryGet } from "../../../redux/category";
import { useDispatch, useSelector } from "react-redux";

function HeaderBottom({ HandleOpen2 }) {
  const [open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose3 = () => setOpen(false);
  const pathname = useLocation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const categoryGets = useSelector((state) => state.category.categoryGet.data);

  useEffect(() => {
    dispatch(CategoryGet());
  }, []);

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const items = [];

  categoryGets.map((elem) =>
    items.push({
      label: (
        <NavLink className={styles.drop_link} to={`/products`}>
          <img src={Icons} alt="Icons" />
          <span>
            {LangVal() == "ru"
              ? elem.category_name_ru
              : LangVal() == "uz"
              ? elem.category_name_uz
              : elem.category_name_ru}
          </span>
        </NavLink>
      ),
      key: elem.id,
    })
  );

  return (
    <Section>
      <WrapperContainer>
        <Wrapper>
          <div className={styles.category_dropdown}>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <i class="bx bxs-category-alt"></i>
                </Space>
              </a>
            </Dropdown>
          </div>
          <HashLink to={"/#home"} smooth>
            <img className={styles.header_logo} src={headerlogo} alt="" />
          </HashLink>

          <ul>
            {dataLink.map((elem, index) => (
              <li key={index}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className={
                    pathname == `${elem.link}` ? styles.active : styles.links
                  }
                  to={elem.link}
                >
                  <p>{t(elem.title)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <MobileDiv>
            <i
              onClick={HandleOpen2}
              style={{ fontSize: "30px", color: "#fff" }}
              class="bx bx-menu-alt-right"
            ></i>
          </MobileDiv>
        </Wrapper>
      </WrapperContainer>
    </Section>
  );
}
export default HeaderBottom;
