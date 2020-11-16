import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";
import Heading from "../../components/Heading";

export const Sólvangur = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Sólvangur Hjúkrunarheimili</Heading>

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
          <FullWidthImage src="/img/solvangur/solvangur1.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/solvangur/solvangur2.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/solvangur/solvangur3.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/solvangur/solvangur4.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/solvangur/solvangur5.jpg" />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <FullWidthImage src="/img/solvangur/solvangur7.jpg" />
        </Col>
        <Col sm={6} xs={12}>
          <FullWidthImage src="/img/solvangur/solvangur6.jpg" />
        </Col>
      </Row>
    </>
  );
};

const SólvangurPage = () => <Layout><Sólvangur /></Layout>;
export default SólvangurPage;