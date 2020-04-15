import React from "react";
import moment from "moment";

const RSK_URL = "https://www.rsk.is/fyrirtaekjaskra/leit/kennitala/6901181570";

const getCopyrightString = () => {
  const currentYear = moment().format(`YYYY`);
  return `Jón og Marteinn Málningarþjónusta ehf. ©  ${currentYear}`;
};

const Footer = (props) => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-4">
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
            </ul>

            <p className="text-muted mb-4 mb-lg-0">
              {getCopyrightString()} <br />
              Kennitala: <a href={RSK_URL}>690118-1570</a>, Gauksrimi 34, 800 Selfoss
            </p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right align-items-start">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/jon_og_marteinn_/"
                  aria-label="Jón & Marteinn á Instagram"
                >
                  Við á Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;