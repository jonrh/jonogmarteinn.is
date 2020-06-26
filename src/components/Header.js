import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import NavigationLinks from "./NavigationLinks";
import simplifiedLogo from "../images/logo/simplified logo v1.svg";

/** Use <h1> when on the frontpage for better SEO */
const FrontPageHeading = (props) => (
  <h1 className="h2" style={{ fontWeight: 700 }}>
    Jón & Marteinn <br />
    <span className="h3">alhliða málningarþjónusta</span>
  </h1>
);

/** Use a <h3> on all subpages for better SEO */
const SubPageHeading = (props) => (
  <h3 className="h2" style={{ fontWeight: 700 }}>
    Jón & Marteinn <br />
    <span className="h3">alhliða málningarþjónusta</span>
  </h3>
);

/** Logo, title, description and navigation links at the top of every page */
const Header = (props) => {
  const heading = props.isFrontpage ? <FrontPageHeading /> : <SubPageHeading />;

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
            {heading}
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