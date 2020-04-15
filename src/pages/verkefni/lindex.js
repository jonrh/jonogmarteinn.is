import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";

import LindexPic1 from "./../../images/lindex.jpg";


const Lindex = (props) => {
  return (
    <Layout>
      <h1>Lindex</h1>
      <p>
        Höfum séð alfarið um málningarþjónustu fyrir Lindex á Íslandi frá því að fyrsta verslun
        opnaði árið 2011. Höfum einnig tekið að okkur verkefni í Kaupmannahöfn.
      </p>
      <Row>
        <Col>
          <FullWidthImage src={LindexPic1} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Lindex;