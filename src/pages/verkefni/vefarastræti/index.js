import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../../components/Layout";
import FullWidthImage from "../../../components/FullWidthImage";

import pic1 from "./vefarastraeti_fjolbylishus_nymalun_1.jpg";
import pic2 from "./vefarastraeti_fjolbylishus_nymalun_2.jpg";
import pic3 from "./vefarastraeti_fjolbylishus_nymalun_3.jpg";
import Heading from "../../../components/Heading";

export const Vefarastræti = (props) => {
  return (
    <>
      <Heading className="text-center" h={props.hLevel}>Vefarastræti</Heading>

      <Row className="mb-5">
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            Innimálun og útimálun á nýju fjölbýlishúsi á Vefarastærti í Mosfellsbæ.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={pic1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={pic2} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FullWidthImage src={pic3} />
        </Col>
      </Row>
    </>
  );
};

const VefarastrætiPage = (props) => <Layout><Vefarastræti /></Layout>;
export default VefarastrætiPage;