import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";
import Heading from "../../components/Heading";

export const Fosshótel = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Fosshótel á Hnappavöllum</Heading>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>Endurmálun á ytra tréverki sem og innanhús á hótelinu.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/fosshotel/fosshotel3.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/fosshotel/fosshotel6.jpg" />
        </Col>
      </Row>
      <Row>
        <Col >
          <FullWidthImage src="/img/fosshotel/fosshotel5.jpg" />
        </Col>
        <Col sm={6} xs={12}>
          <FullWidthImage src="/img/fosshotel/fosshotel2.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/fosshotel/fosshotel1.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/fosshotel/fosshotel4.jpg" />
        </Col>
      </Row>
    </>
  );
};

const FosshótelPage = () => <Layout><Fosshótel /></Layout>;
export default FosshótelPage;