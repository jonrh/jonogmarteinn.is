import React from "react";
import Link from "next/link";
import {Col, Row} from "react-bootstrap";

import Layout from "../../components/Layout";

const Málningarþjónusta = () => {
  return (
    <Layout>
      <h1 className="text-center">Málningarþjónusta</h1>

      <Row>
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            <Link href="/málningarþjónusta/íbúðarhúsnæði">Íbúðarhúsnæði</Link> <br />
            <Link href="/málningarþjónusta/fjölbýlishús">Fjölbýlishús</Link> <br />
            <Link href="/málningarþjónusta/atvinnuhúsnæði">Atvinnuhúsnæði</Link> <br />
            <Link href="/málningarþjónusta/sérverkefni">Sérverkefni</Link> <br />
            <Link href="/málningarþjónusta/innimálun">Innimálun</Link> <br />
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Málningarþjónusta;