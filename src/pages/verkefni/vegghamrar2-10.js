import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import VegghamrarPic1 from "./../../images/vegghamrar2-10/vegghamrar1.jpg";

const Vegghamrar = (props) => {
  return (
    <Layout>
      <h1 className="text-center">Vegghamrar 2 - 10</h1>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            Viðhald fyrir húsfélag Vegghamra 2 - 10. Útimálun á öllum veggjum og tréverki.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={VegghamrarPic1} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Vegghamrar;