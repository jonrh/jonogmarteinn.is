import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import simplifiedLogo from "../images/logo/simplified logo v1.svg";

const Header = (props) => {
  return (
    <header className="py-5">
      <Row className="align-items-center">
        <Col md={6} sm={12} className="mb-4 mb-md-0">
          <Row className="align-items-center">
            <Col lg={2} md={3} xs={2}><Image src={simplifiedLogo} /></Col>
            <Col lg={10} md={9} xs={10}><h3 className="mb-0">Jón & Marteinn</h3></Col>
          </Row>
        </Col>
        <Col md={6} sm={12} className="mb-0 mb-lg-0">
          <ul className="list-inline text-md-right mb-0">
            <li className="list-inline-item">
              <a href="/þjónustur">Þjónustur</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="/verkefni">Verkefni</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="/fyrirtækið">Um Fyrirtækið</a>
            </li>
          </ul>
        </Col>
      </Row>
    </header>
  );
};

export default Header;