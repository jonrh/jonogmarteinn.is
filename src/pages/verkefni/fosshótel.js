import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import Fosshotel1 from "./../../images/fosshotel/fosshotel1.jpg";
import Fosshotel2 from "./../../images/fosshotel/fosshotel2.jpg";
import Fosshotel3 from "./../../images/fosshotel/fosshotel3.jpg";
import Fosshotel4 from "./../../images/fosshotel/fosshotel4.jpg";
import Fosshotel5 from "./../../images/fosshotel/fosshotel5.jpg";
import Fosshotel6 from "./../../images/fosshotel/fosshotel6.jpg";

export const Fosshótel = (props) => {
  return (
    <>
      <h1 className="text-center">Fosshótel á Hnappavöllum</h1>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>Endurmálun á ytra tréverki sem og innanhús á hótelinu.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Fosshotel3} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Fosshotel6} />
        </Col>
      </Row>
      <Row>
        <Col >
          <FullWidthImage src={Fosshotel5} />
        </Col>
        <Col sm={6} xs={12}>
          <FullWidthImage src={Fosshotel2} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Fosshotel1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={Fosshotel4} />
        </Col>
      </Row>
    </>
  );
};

const FosshótelPage = () => <Layout><Fosshótel /></Layout>;
export default FosshótelPage;