import React, {useState} from "react";

import Layout from "../components/Layout";
import ProjectRequest from "../components/ProjectRequest";
import {Col, Row} from "react-bootstrap";

const Verkbeidni = () => {
  const [showIntro, setShowIntro] = useState(true);

  const intro =
    <p className="text-justify">
      Ertu með verkefni þar sem þarf að mála? Málarar okkar eru til í slaginn með þér! Fyrst
      sendirðu okkur verkbeiðni hér að neðan. Við munum svo hafa samband, mæla okkur mót og gefa
      þér frítt tilboð.
    </p>;

  return (
    <Layout>
      <h1 id="verkbeidni" className="text-center mb-3">Verkbeiðni</h1>
      <Row>
        <Col className="col-11 col-md-10 col-lg-8 mx-auto">
          {showIntro ? intro : null}
          <ProjectRequest setShowIntro={setShowIntro} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Verkbeidni;