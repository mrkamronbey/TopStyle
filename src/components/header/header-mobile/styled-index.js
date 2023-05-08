import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  height: 71% ;

  .socials {
    display: block;
    @media only screen and (max-width: 1090px) {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      margin-top: 20px;
    }
    @media only screen and (max-width: 575px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-direction: column;
      margin-top: 20px;
    }
  }

  .socials > p {
    margin: 0;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .social_medias {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .social_medias > a {
    margin: 0 10px;
    text-decoration: none;
  }

  @media only screen and (max-width: 1094px) {
    display: block;
    position: fixed;
    width: 100%;
    background: #03544c;
    box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 15px 15px;
    height: auto;
    z-index: 110;
    padding-bottom: 15px;
    top: ${(props) => (props.open ? "0px" : "-1000px")};
    transition: 1s;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    .Top {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media only screen and (max-width: 425px) {
        img{
          width: 110px;
          object-fit: cover
        }
      }
      span {
        color: white;
        font-size: 40px;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-decoration: none;
      margin: 0;
      padding: 0;
      margin-top: 5px;
      margin-left: 20px;
      li {
        margin: 0;
        padding: 0;
        p {
          width: 100%;
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
    .flags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 30px;
      margin-left: 20px;
      button {
        background-color: transparent;
        border: transparent;
        img {
          border-radius: 5px;
        }
      }
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 135%;
      letter-spacing: 0.01em;
      color: #ffffff;
      width: 50%;
      margin-top: 15px;
      margin-left: 20px;
    }
    a {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: 0.01em;
      color: #ffffff;
      text-decoration: none;
      margin-left: 20px;
    }
  }

  /* @media only screen and (max-width: 400px){
    height: 70%;
  }  */
`;
export const Overlay = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;
