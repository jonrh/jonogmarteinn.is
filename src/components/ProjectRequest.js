import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner";

const SubmissionSuccess = (props) => {
  return (
    <Card className="my-5">
      <Card.Body>
        <Card.Title className="text-center">
          Móttekið <span role="img" aria-label="confetti celebration">🎉</span>
        </Card.Title>

        <p className="text-justify">
          Við höfum samband eins fljótt og við getum, mælum okkur mót fyrir vettfangsskoðun og
          gefum þér frítt tilboð í verkið. Ef staðfestingar tölvupóstur barst ekki væri öruggast að
          senda beiðnina beint á{" "}
          <a href="mailto:jonogmarteinn@jonogmarteinn.is?Subject=Verkbeiðni">
            jonogmarteinn@jonogmarteinn.is
          </a>.
        </p>

        <hr />

        <p className="my-3">
          <strong>Nafn</strong>: {props.name} <br />
          <strong>Sími</strong>: {props.phone} <br />
          <strong>Póstur</strong>: {props.email} <br />
          <strong>Lýsing</strong>: {props.description}
        </p>

      </Card.Body>
    </Card>
  );
};

const ProjectForm = (props) => {
  const {setName, setPhone, setEmail, setDescription, onSubmit, isLoading} = props;

  return (
    <Form className="my-5">
      <Form.Group controlId="projectForm.Name">
        <Form.Label>Nafn</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          disabled={isLoading}
          onChange={event => setName(event.target.value)}
          placeholder="Nafn einstaklings, fyrirtækis eða stofnunnar"
        />
      </Form.Group>

      <Form.Group controlId="projectForm.Phone">
        <Form.Label>Símanúmer</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          disabled={isLoading}
          onChange={event => setPhone(event.target.value)}
          placeholder="Símanúmer svo við getum spjallað"
        />
      </Form.Group>

      <Form.Group controlId="projectForm.Email">
        <Form.Label>Tölvupóstur</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          disabled={isLoading}
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
          disabled={isLoading}
          onChange={event => setDescription(event.target.value)}
          placeholder="Lýsing á verki, staðsetning og verktími"
        />
        <Form.Text className="text-muted">
          Gott fyrir okkur að vita: stutt lýsing á umfangi, heimilisfang verkstaðs og hvenær
          verk ætti að hefjast.
        </Form.Text>
      </Form.Group>

      {isLoading
        ? <LoadingSpinner />
        : <Button variant="project-request" size="lg" block={true} type="submit" onClick={onSubmit}>
          Senda verkbeiðni
        </Button>
      }
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
  const { setShowIntro=(noop) => {} } = props;

  /**
   * After the form has been submitted, scroll so the heading and the results are in view.
   *
   * Note: This is not an ideal solution. It's annoying to get the scrolled position changed when
   * the form and confirmation modal were already in view and therefore no need to change the
   * position. This function could therefore potentially be refined to take into account if a
   * scroll is needed or not. Then skip scrolling if it's not needed.
   */
  const scrollToHeading = () => {
      if (document.querySelector("#verkbeidni")) {
        document.querySelector("#verkbeidni").scrollIntoView({ behavior: "smooth" });
      }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Debug function to simulate API response time
    // setTimeout(() => {
    //   setLoading(false);
    //   setSent(true);
    //   setShowIntro(false);
    //
    //   if (document.querySelector("#verkbeidni")) {
    //     document.querySelector("#verkbeidni").scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 2000);

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

    setLoading(false);
    setSent(true);
    setShowIntro(false);
    scrollToHeading();

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
      isLoading={isLoading}
    />;

  return isSent ? submissionSuccess : projectForm;
};

export default ProjectRequest;