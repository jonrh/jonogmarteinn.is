import React from "react";
import {Col, Row} from "react-bootstrap";

import Layout from "../../components/Layout";

import {Hjarðarhagi24_32} from "./hjarðarhagi24-32";
import {Vefarastræti} from "./vefarastræti";
import {Fosshótel} from "./fosshótel";
import {Lindex} from "./lindex";
import {Sólvangur} from "./sólvangur";
import {Blikahöfði} from "./blikahöfði5-7";
import {Vegghamrar} from "./vegghamrar2-10";

const Verkefni = (props) => {
  const projectComponents = [
    Hjarðarhagi24_32,
    Vefarastræti,
    Fosshótel,
    Lindex,
    Sólvangur,
    Blikahöfði,
    Vegghamrar
  ];

  const projects = projectComponents.map((Project, index) => (
    <section key={index} className="my-5">
      <Project hLevel="h2" />
    </section>
  ));

  return (
    <Layout>
      <h1 className="text-center">Verkefni</h1>

      <Row>
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            <a href="/verkefni/hjarðarhagi24-32">Hjarðarhagi 24 - 32</a> <br />
            <a href="/verkefni/vefarastræti">Vefarastræti</a> <br />
            <a href="/verkefni/fosshótel">Fosshótel</a> <br />
            <a href="/verkefni/lindex">Lindex</a> <br />
            <a href="/verkefni/sólvangur">Sólvangur Hjúkrunarheimili</a> <br />
            <a href="/verkefni/blikahöfði5-7">Blikahöfði 5 - 7</a> <br />
            <a href="/verkefni/vegghamrar2-10">Vegghamrar 2 - 10</a> <br />
          </p>
        </Col>
      </Row>

      {projects}
    </Layout>
  );
};

export default Verkefni;