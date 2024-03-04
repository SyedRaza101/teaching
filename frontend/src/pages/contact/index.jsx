// import React from "react";
import { Wrapper } from "./styles";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MapEmbed from "../../components/map/MapEmbed";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-6">
            <MapEmbed />
          </div>
          <div className="col-6 mx-auto">
            <h2 className="text-center">Contact Us </h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Your First Name..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Your Last Name..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>What would you like to discuss</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
