import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";
import Heading from "../../components/Heading";

export const Vegghamrar = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Vegghamrar 2 - 10</Heading>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            Viðhald fyrir húsfélag Vegghamra 2 - 10. Útimálun á öllum veggjum og tréverki.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src="/img/vegghamrar2-10/vegghamrar1.jpg" />
        </Col>
      </Row>
    </>
  );
};

const VegghamrarPage = (props) => <Layout><Vegghamrar /></Layout>;
export default VegghamrarPage;