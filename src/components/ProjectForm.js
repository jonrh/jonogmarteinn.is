import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap"

const SubmissionSuccess = (props) => {
  return (
    <Container>
      <h2 className="h1 text-center">Verkbeiðni</h2>

      <Alert variant="success" className="my-5">
        <p className="text-center">
          Verkbeiðni móttekin <span role="img" aria-label="confetti celebration">🎉</span>
        </p>

        <p className="my-3">
          <strong>Nafn</strong>: Jón Hafdal <br />
          <strong>Sími</strong>: 770 1532 <br />
          <strong>Póstur</strong>: jonrh@jonrh.is <br />
          <strong>Lýsing</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum aliquam quam id leo aliquet cursus. Fusce pellentesque elementum nisl suscipit
          tempor. Curabitur vulputate elit arcu, at lacinia tellus elementum sit amet. Fusce quis
          laoreet sem. Aliquam eu lacus nec odio maximus pretium vitae ut ex. Cras vel nulla neque.
          Nunc rutrum vel massa in dignissim.
        </p>

        <hr />

        <p>
          Næstu skref eru að við munum hafa samband eins fljótt og við getum. Eftir það mælum við
          okkur mót fyrir vettfangsskoðun og gefum því næst frítt tilboð í verkið.
        </p>

        <p>
          Þú ættir að hafa fengið staðfestingar tölvupóst fyrir verkbeiðninni. Ef þú hefur ekki
          fengið slíkan póst vinsamlegast sendu okkur verkbeiðna póst beint á{" "}
          <a href="mailto:jonogmarteinn@jonogmarteinn.is?Subject=Verkbeiðni">
            jonogmarteinn&#8203;@jonogmarteinn.is
          </a> til öryggis.
        </p>
      </Alert>
    </Container>
  );
};

const ProjectForm = (props) => {
  const [isSent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setSent(true)

    console.log("Mock API request sending");
    console.log("Name: "+ name);
    console.log("Phone: "+ phone);
    console.log("Email: "+ email);
    console.log("Description: "+ description);
  };

  return (
    <Container>
      <h2 className="h1 text-center">Verkbeiðni</h2>

      <Form className="my-5">
        <Form.Group controlId="projectForm.Name">
          <Form.Label>Nafn</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            onChange={event => setName(event.target.value)}
            placeholder="Nafn einstaklings, fyrirtækis eða stofnunnar"
          />
        </Form.Group>

        <Form.Group controlId="projectForm.Phone">
          <Form.Label>Símanúmer</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            onChange={event => setPhone(event.target.value)}
            placeholder="Símanúmer svo við getum spjallað"
          />
        </Form.Group>

        <Form.Group controlId="projectForm.Email">
          <Form.Label>Tölvupóstur</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            onChange={event => setEmail(event.target.value)}
            placeholder="Netfang svo við getum haft samband"
          />
          <Form.Text className="text-muted">
            Netfang eingöngu notað í samskiptum verkefnis. Deilum ekki netfangi & enginn póstlisti.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="projectForm.Description">
          <Form.Label>Verklýsing</Form.Label>
          <Form.Control
            as="textarea"
            size="lg"
            rows="2"
            onChange={event => setDescription(event.target.value)}
            placeholder="Lýsing á verki, staðsetning og verktími"
          />
          <Form.Text className="text-muted">
            Gott fyrir okkur að vita: stutt lýsing á umfangi, heimilisfang verkstaðs og hvenær
            verk ætti að hefjast.
          </Form.Text>
        </Form.Group>

        <Button variant="project-request" size="lg" block={true} type="submit" onClick={onSubmit}>
          Senda verkbeiðni
        </Button>
      </Form>
    </Container>
  );
};

// export default SubmissionSuccess;
export default ProjectForm;