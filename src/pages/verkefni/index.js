import React from "react";
import Link from "next/link";
import {Col, Row} from "react-bootstrap";

import Layout from "../../components/Layout";

import {Hjarðarhagi2432} from "./hjarðarhagi24-32";
import {Vefarastræti} from "./vefarastræti";
import {Fosshótel} from "./fosshótel";
import {Lindex} from "./lindex";
import {Sólvangur} from "./sólvangur";
import {Blikahöfði} from "./blikahöfði5-7";
import {Vegghamrar} from "./vegghamrar2-10";

const Verkefni = (props) => {
  const projectComponents = [
    Hjarðarhagi2432,
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
            <Link href="/verkefni/hjarðarhagi24-32">Hjarðarhagi 24 - 32</Link> <br />
            <Link href="/verkefni/vefarastræti">Vefarastræti</Link> <br />
            <Link href="/verkefni/fosshótel">Fosshótel</Link> <br />
            <Link href="/verkefni/lindex">Lindex</Link> <br />
            <Link href="/verkefni/sólvangur">Sólvangur Hjúkrunarheimili</Link> <br />
            <Link href="/verkefni/blikahöfði5-7">Blikahöfði 5 - 7</Link> <br />
            <Link href="/verkefni/vegghamrar2-10">Vegghamrar 2 - 10</Link> <br />
          </p>
        </Col>
      </Row>

      {projects}
    </Layout>
  );
};

export default Verkefni;