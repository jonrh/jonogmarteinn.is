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


const Fosshótel = (props) => {
  return (
    <Layout>
      <h1>Fosshótel á Hnappavöllum</h1>
      <p>Endurmálun á ytra tréverki sem og innanhús á hótelinu.</p>

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
        <Col xs={6}>
          <FullWidthImage src={Fosshotel5} />
        </Col>
        <Col xs={6}>
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

    </Layout>
  );
};

export default Fosshótel;