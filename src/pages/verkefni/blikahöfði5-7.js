import React from "react";
import {Row, Col} from "react-bootstrap";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import BlikahöfðiPic1 from "./../../images/blikahofdi1.jpg";

const Blikahöfði = (props) => {
  return (
    <Layout>
      <h1 className="text-center">Vegghamrar 2 - 10</h1>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            Endurmálun fyrir húsfélag Blikhöfða 5 - 7. Útimálun á veggjum og tréverki.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={BlikahöfðiPic1} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Blikahöfði;