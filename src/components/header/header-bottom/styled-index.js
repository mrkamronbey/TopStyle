import styled from "styled-components";

export const Section = styled.div`
  padding: 7px 0;
  background: #03544c;
  box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  .ant-input {
    padding: 4.3px 11px !important;
    :hover {
      border: 1px solid white;
      outline: none;
    }
    :active {
      border: 1px solid white;
      outline: none;
    }
    border: 1px solid white;
    border-radius: 25px;
    outline: none;
  }
  .ant-btn {
    :hover {
      border: transparent;
    }
    border: 2px solid white;
    border-top-right-radius: 25px !important;
    border-bottom-right-radius: 25px !important;
    padding-bottom: 7px !important;
  }
  @media only screen and (max-width: 920px) {
    .search {
      display: none;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media only screen and (max-width: 1283px) {
    padding: 0 20px;
  }
 
  /* .category_mobile{
    display: none;
  } */

  .links > p {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: "Rubik";
  }

  .links {
    position: relative;
  }

  .active > p {
    /* border-bottom: 4px solid #fff !important; */
    position: relative;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: "Rubik";
  }

  .links::before {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 2px;
    background-color: #fff;
    bottom: -5px;
    border-radius: 50px;
    transition: 0.9s transform;
    transform: scaleX(0);
    transform-origin: right;
  }
  .links:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  .active > p::before {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 3px;
    background-color: #fff;
    bottom: -5px;
    border-radius: 50px;
    transition: 0.9s transform;
  }

  .navlink {
    text-decoration: none;
    color: #000;
    border: none;
    background: transparent;
    outline: none;
  }

  ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    width: 50%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 1094px) {
      display: none;
    }
    li {
      margin: 0;
      padding: 0;
      display: flex;
      p {
        margin: 0;
        padding: 0;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.01em;
        color: #ffffff;
      }
    }
  }
`;
export const MobileDiv = styled.div`
  display: none;
  @media only screen and (max-width: 1094px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* width: 25%; */
    .AuthMobile {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        font-weight: 400;
        font-size: 24px;
        color: white;
      }
    }
  }
`;
