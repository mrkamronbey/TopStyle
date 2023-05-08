import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
`;

export const BigContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;
export const GlobalStyle = createGlobalStyle`

  html{
    scroll-behavior:smooth !important;
  }
    
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #F5F5F5;
    font-family: 'Rubik', sans-serif;
  }
`;
