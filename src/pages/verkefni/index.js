import React from "react";
import {Col, Row} from "react-bootstrap";

import Layout from "../../components/Layout";

const Verkefni = (props) => {
  return (
    <Layout>
      <h1 className="text-center">Verkefni</h1>

      <Row>
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            <a href="/verkefni/fosshótel">Fosshótel</a> <br />
            <a href="/verkefni/lindex">Lindex</a> <br />
            <a href="/verkefni/sólvangur">Sólvangur Hjúkrunarheimili</a> <br />
            <a href="/verkefni/blikahöfði5-7">Blikahöfði 5 - 7</a> <br />
            <a href="/verkefni/vegghamrar2-10">Vegghamrar 2 - 10</a> <br />
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Verkefni;