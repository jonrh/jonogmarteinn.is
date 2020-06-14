import React from "react";
import { Container } from "react-bootstrap";

import NavigationLinks from "./NavigationLinks";

const INSTAGRAM_URL = "https://www.instagram.com/jon_og_marteinn_/";
const RSK_URL = "https://www.rsk.is/fyrirtaekjaskra/leit/kennitala/6901181570";

const getCopyrightString = () => {
  const currentYear = new Date().getFullYear();
  return `Jón og Marteinn Málningarþjónusta ehf. ©  ${currentYear}`;
};

const Footer = (props) => {
  return (
    <footer className="text-center" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <Container>
        <NavigationLinks />

        <p className="text-muted mb-4">
          {getCopyrightString()} <br />
          Kennitala: <a href={RSK_URL}>690118-1570</a>, Gauksrimi 34, 800 Selfoss
        </p>

        <ul className="list-inline">
          <li className="list-inline-item">
            <a href={INSTAGRAM_URL} aria-label="Jón & Marteinn á Instagram">
              Við á Instagram
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;