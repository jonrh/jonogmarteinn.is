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

const Sólvangur = (props) => {
  return (
    <Layout>
      <h1>Sólvangur Hjúkrunarheimili</h1>
      <p>
        Höfum nýlokið við alla sparsl og málningarvinnu í glæsilegu hjúkrunarheimili Sólvangs í
        Hafnarfirði.
      </p>

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
        <Col >
          <FullWidthImage src={Solvangur7} />
        </Col>
        <Col>
          <FullWidthImage src={Solvangur6} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Sólvangur;