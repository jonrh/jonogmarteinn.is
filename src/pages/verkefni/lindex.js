import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/Layout";
import FullWidthImage from "../../components/FullWidthImage";
import Heading from "../../components/Heading";

import LindexPic1 from "./../../images/lindex.jpg";

export const Lindex = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Lindex</Heading>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-justify mx-auto">
          <p>
            Höfum séð alfarið um málningarþjónustu fyrir Lindex á Íslandi frá því að fyrsta verslun
            opnaði árið 2011. Höfum einnig tekið að okkur verkefni í Kaupmannahöfn.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <FullWidthImage src={LindexPic1} />
        </Col>
      </Row>
    </>
  );
};

const LindexPage = () => <Layout><Lindex /></Layout>;
export default LindexPage;