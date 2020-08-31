import React from "react";
import {Col, Row} from "react-bootstrap";

import Layout from "../components/Layout";

import pic1 from "../images/málarameistari.jpg";
import certificate from "../images/Jón Hafdal málarameistari skírteini.jpg"
import Profile1_Jon from "../images/profile1_jon.jpg";
import Profile2_Marteinn from "../images/profile2_marteinn.jpg";

const Owner = ({name, image, phoneNumber}) => {
  const phoneNumberWithoutSpaces = phoneNumber.replace(/\s+/g, "");
  const callableHref = `tel:+354${phoneNumberWithoutSpaces}`;

  return (
    <Col xl={4} className="text-center align-self-center mb-5">
      <img
        className="img-fluid rounded-circle mb-3"
        src={image}
        alt={`Portrait of ${name}`}
      />
      <h5>{name}</h5>
      <p className="font-weight-bold mb-0 h3">
        <a href={callableHref}>
          <i className="icon-phone mx-2 red-theme" />
          {phoneNumber}
        </a>
      </p>
    </Col>
  );
};

const Málarameistari = () => {
  return (
    <Layout>
      <h1 className="text-center">Málarameistari</h1>

      <section>
        <Row>
          <Col>
            <img
              src={pic1}
              className="img-fluid mb-3"
              alt="Málarameistarinn Jón Hafdal standandi við hlið Marteins"
            />
          </Col>
        </Row>

        <Row className="pt-5">
          <Col lg={8} md={10} sm={11} xs={11} className="text-justify mx-auto">
            <p className="lead">
              Jón Hafdal er <strong>löggiltur málarameistari</strong> og hefur að baki 20 ára
              reynslu af málun, Marteinn 22 ár. Saman stofnuðu þeir fyrirtækið Jón og Marteinn
              Málningarþjónusta ehf.
            </p>

            <p className="lead">
              Fyrirtækið tekur að sér öll almenn málningarverkefni. Verkefni stór sem smá,
              sérsniðið að óskum og þörfum og hvar sem er á landinu. Höfum einnig tekið að okkur
              verkefni erlendis. Hjá fyrirtækinu starfa samtals 10 starfsmenn meðtalið Jóni og
              Marteini.
            </p>

            <img
              src={certificate}
              className="img-fluid my-3"
              alt="Jón Hafdal málarameistari skírteini"
            />
          </Col>
        </Row>

        <Row className="justify-content-center py-5">
          <Owner name="Jón Hafdal Sigurðarson" image={Profile1_Jon} phoneNumber="770 1532" />
          <Owner name="Marteinn Hilmarsson" image={Profile2_Marteinn} phoneNumber="861 1242" />
        </Row>
      </section>

    </Layout>
  );
};

export default Málarameistari;