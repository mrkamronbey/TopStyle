import "./styled-app.js";
import RouterComponent from "./router";
import Header from "./components/header";
import { GlobalStyle } from "./styled-app";
import Footer from "./components/footer/index.jsx";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterComponent />
      <Footer/>
    </>
  );
}

export default App;
