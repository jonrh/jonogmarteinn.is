import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import Solvangur1 from "./../../images/solvangur/solvangur1.jpg";
import Solvangur2 from "./../../images/solvangur/solvangur2.jpg";
import Solvangur3 from "./../../images/solvangur/solvangur3.jpg";
import Solvangur4 from "./../../images/solvangur/solvangur4.jpg";
import Solvangur5 from "./../../images/solvangur/solvangur5.jpg";
import Solvangur6 from "./../../images/solvangur/solvangur6.jpg";
import Solvangur7 from "./../../images/solvangur/solvangur7.jpg";

export const Sólvangur = (props) => {
  return (
    <>
      <h1 className="text-center">Sólvangur Hjúkrunarheimili</h1>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-justify mx-auto">
          <p>
            Sparsl og innanhús málun fyrir nýtt og glæsilegt hjúkrunarheimili Sólvangs í
            Hafnarfirði.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Solvangur1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Solvangur2} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Solvangur3} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Solvangur4} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Solvangur5} />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <FullWidthImage src={Solvangur7} />
        </Col>
        <Col sm={6} xs={12}>
          <FullWidthImage src={Solvangur6} />
        </Col>
      </Row>
    </>
  );
};

const SólvangurPage = () => <Layout><Sólvangur /></Layout>;
export default SólvangurPage;