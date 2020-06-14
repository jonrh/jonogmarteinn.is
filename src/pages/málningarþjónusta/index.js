import React from "react";
import {Col, Row} from "react-bootstrap";

import Layout from "../../components/Layout";

const Málningarþjónusta = () => {
  return (
    <Layout>
      <h1 className="text-center">Málningarþjónusta</h1>

      <Row>
        <Col lg={8} md={10} sm={11} xs={11} className="text-center mx-auto">
          <p>
            <a href="/málningarþjónusta/íbúðarhúsnæði">Íbúðarhúsnæði</a> <br />
            <a href="/málningarþjónusta/fjölbýlishús">Fjölbýlishús</a> <br />
            <a href="/málningarþjónusta/atvinnuhúsnæði">Atvinnuhúsnæði</a> <br />
            <a href="/málningarþjónusta/sérverkefni">Sérverkefni</a> <br />
            <a href="/málningarþjónusta/innimálun">Innimálun</a> <br />
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Málningarþjónusta;