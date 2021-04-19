import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap"

const SubmissionSuccess = (props) => {
  return (
    <Alert variant="success" className="my-5">
      <p className="text-center">
        Verkbeiðni móttekin <span role="img" aria-label="confetti celebration">🎉</span>
      </p>

      <p className="my-3">
        <strong>Nafn</strong>: {props.name} <br />
        <strong>Sími</strong>: {props.phone} <br />
        <strong>Póstur</strong>: {props.email} <br />
        <strong>Lýsing</strong>: {props.description}
      </p>

      <hr />

      <p>
        Næstu skref eru að við munum hafa samband eins fljótt og við getum. Eftir það mælum við
        okkur mót fyrir vettfangsskoðun og gefum því næst frítt tilboð í verkið.
      </p>

      <p>
        Ef staðfestingar tölvupóstur barst ekki væri öruggast að senda beiðnina beint á{" "}
        <a href="mailto:jonogmarteinn@jonogmarteinn.is?Subject=Verkbeiðni">
          jonogmarteinn@jonogmarteinn.is
        </a>.
      </p>
    </Alert>
  );
};

const ProjectForm = (props) => {
  return (
    <Form className="my-5">
      <Form.Group controlId="projectForm.Name">
        <Form.Label>Nafn</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          onChange={event => props.setName(event.target.value)}
          placeholder="Nafn einstaklings, fyrirtækis eða stofnunnar"
        />
      </Form.Group>

      <Form.Group controlId="projectForm.Phone">
        <Form.Label>Símanúmer</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          onChange={event => props.setPhone(event.target.value)}
          placeholder="Símanúmer svo við getum spjallað"
        />
      </Form.Group>

      <Form.Group controlId="projectForm.Email">
        <Form.Label>Tölvupóstur</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          onChange={event => props.setEmail(event.target.value)}
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
          onChange={event => props.setDescription(event.target.value)}
          placeholder="Lýsing á verki, staðsetning og verktími"
        />
        <Form.Text className="text-muted">
          Gott fyrir okkur að vita: stutt lýsing á umfangi, heimilisfang verkstaðs og hvenær
          verk ætti að hefjast.
        </Form.Text>
      </Form.Group>

      <Button
        variant="project-request" size="lg"
        block={true} type="submit"
        onClick={props.onSubmit}
      >
        Senda verkbeiðni
      </Button>
    </Form>
  );
};

const ProjectRequest = (props) => {
  const [isSubmitted, setSubmitted] = useState(false); // When submit button is pressed
  const [isLoading, setLoading] = useState(false); // Waiting on API response
  const [isError, setError] = useState(false); // If network or API endpoint error
  const [isSent, setSent] = useState(false); // API response resolved and email is sent
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("api/projectrequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        description: description,
      }),
    });

    console.log("State:");
    console.log("Name: "+ name);
    console.log("Phone: "+ phone);
    console.log("Email: "+ email);
    console.log("Description: "+ description);
  };

  const submissionSuccess =
    <SubmissionSuccess
      name={name}
      phone={phone}
      email={email}
      description={description}
    />;

  const projectForm =
    <ProjectForm
      setName={setName}
      setPhone={setPhone}
      setEmail={setEmail}
      setDescription={setDescription}
      onSubmit={onSubmit}
    />;

  return isSent ? submissionSuccess : projectForm;
};

export default ProjectRequest;