import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import NavigationLinks from "./NavigationLinks";
import simplifiedLogo from "../images/logo/simplified logo v1.svg";

/** Logo, title, description and navigation links at the top of every page */
const Header = (props) => {
  return (
    <header className="py-5">
      <Container>
        {/* Logo */}
        <Row className="justify-content-center">
          <Col xl={1} lg={2} md={2} xs={3}>
            <a href="/" aria-label="Forsíða">
              <Image
                src={simplifiedLogo}
                alt="Jón & Marteinn logo, red house facade with windows"
              />
            </a>
          </Col>
        </Row>

        {/* Title & description */}
        <Row className="mt-3">
          <Col className="text-center">
            <h2 className="mb-0">Jón & Marteinn</h2>
            <h3 className="mt-2">alhliða málningarþjónusta</h3>
          </Col>
        </Row>

        {/* Navigation links */}
        <Row>
          <Col className="mt-3 mb-0 mb-lg-0 text-center">
            <NavigationLinks />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;