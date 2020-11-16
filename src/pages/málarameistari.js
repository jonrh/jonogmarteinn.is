import React from "react";
import Image from "next/image"
import { Col, Row } from "react-bootstrap";

import Layout from "../components/Layout";

const Owner = ({name, image, phoneNumber}) => {
  const phoneNumberWithoutSpaces = phoneNumber.replace(/\s+/g, "");
  const callableHref = `tel:+354${phoneNumberWithoutSpaces}`;

  return (
    <Col xl={4} className="text-center align-self-center mb-5">
      <img src={image} alt={`Portrait of ${name}`} className="img-fluid rounded-circle mb-3" />

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

export const MálarameistariTextDescription = () => {
  const jonYearsOfExperience = new Date().getUTCFullYear() - 2000;
  const marteinnYearsOfExperience = new Date().getUTCFullYear() - 1998;

  return (
    <>
      <p className="lead">
        Jón Hafdal er <strong>löggiltur málarameistari</strong> og hefur að baki{" "}
        {jonYearsOfExperience} ára reynslu af málun, Marteinn {marteinnYearsOfExperience} ár.
        Saman stofnuðu þeir fyrirtækið Jón og Marteinn Málningarþjónusta ehf.
      </p>

      <p className="lead">
        Fyrirtækið tekur að sér öll almenn málningarverkefni. Verkefni stór sem smá, sérsniðið að
        óskum og þörfum og hvar sem er á landinu. Höfum einnig tekið að okkur verkefni erlendis.
        Hjá fyrirtækinu starfa samtals 10 starfsmenn meðtalið Jóni og Marteini.
      </p>
    </>
  );
}

const Málarameistari = () => {
  return (
    <Layout>
      <h1 className="text-center">Málarameistari</h1>

      <section>
        <Row>
          <Col>
            <Image
              src="/img/málarameistari.jpg"
              alt="Málarameistarinn Jón Hafdal standandi við hlið Marteins"
              className="img-fluid mb-3"
              width={1456}
              height={1096}
            />
          </Col>
        </Row>

        <Row className="pt-5">
          <Col lg={8} md={10} sm={11} xs={11} className="text-justify mx-auto">
            <MálarameistariTextDescription />

            <Image
              src="/img/Jón Hafdal málarameistari skírteini.jpg"
              alt="Jón Hafdal málarameistari skírteini"
              className="img-fluid my-3"
              width={944}
              height={1522}
            />
          </Col>
        </Row>

        <Row className="justify-content-center py-5">
          <Owner name="Jón Hafdal Sigurðarson" image="/img/profile1_jon.jpg" phoneNumber="770 1532" />
          <Owner name="Marteinn Hilmarsson" image="/img/profile2_marteinn.jpg" phoneNumber="861 1242" />
        </Row>
      </section>

    </Layout>
  );
};

export default Málarameistari;