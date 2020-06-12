import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import s from "./Header.module.css";
import simplifiedLogo from "../images/logo/simplified logo v1.svg";

const Header = (props) => {
  return (
    <header className="py-5">
      {/* Logo and heading */}
      <Row className="justify-content-center">
        <Col xl={1} lg={2} md={2} xs={3}>
          <a href="/" aria-label="Forsíða" className={s.header}>
            <Image src={simplifiedLogo} alt="Jón & Marteinn logo, red house facade with windows" />
          </a>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <h2 className="mb-0">Jón & Marteinn</h2>
          <h3 className="mt-2">alhliða málningarþjónusta</h3>
        </Col>
      </Row>

      {/* Navigation links */}
      <Row>
        <Col className="mt-3 mb-0 mb-lg-0 text-center">
          <ul className={`list-inline mb-0 ${s.headerLinks}`}>
            <li className="list-inline-item">
              <a href="/">Forsíða</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
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