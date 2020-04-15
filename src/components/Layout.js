import React from "react";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./../styles/landing-page.css";
import "./../styles/jonogmarteinn.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <>

      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;