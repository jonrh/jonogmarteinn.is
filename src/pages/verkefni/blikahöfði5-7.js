import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import BlikahöfðiPic1 from "./../../images/blikahofdi1.jpg";

const Blikahöfði = (props) => {
  return (
    <Layout>
      <h1>Vegghamrar 2 - 10</h1>
      <p>
        Endurmálun fyrir húsfélag Blikhöfða 5 - 7. Útimálun á veggjum og tréverki.
      </p>
      <Row>
        <Col>
          <FullWidthImage src={BlikahöfðiPic1} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Blikahöfði;