import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../../components/Layout";
import FullWidthImage from "../../../components/FullWidthImage";

import pic1 from "./hjarðarhagi 24-32 fjölbýlishús málun 1500x1000.jpg";
import pic2 from "./hjarðarhagi 24-32 málari 1500x1000.jpg";
import Heading from "../../../components/Heading";

export const Hjarðarhagi24_32 = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Hjarðarhagi 24 - 32</Heading>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            Verkefni í vinnslu. Endurmálun á Hjarðarhaga 24 - 32 í Vesturbæ Reykjavíkur. Tréverk
            á gluggum ásamt ytri veggjum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={pic2} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={pic1} />
        </Col>
      </Row>
    </>
  );
};

const Hjarðarhagi24_32Page = (props) => <Layout><Hjarðarhagi24_32 /></Layout>;
export default Hjarðarhagi24_32Page;