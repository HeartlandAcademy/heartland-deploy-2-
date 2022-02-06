import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Section = styled.div`
  padding: 50px 100px;
  @media (max-width: 479px) {
    padding: 70px 30px;
  }
`;

const Title = styled.h2`
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  margin: 5px 0 20px 0;
`;

const CareerContainer = styled.div`
  margin: 30px 0;
  h2 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const CareerAdd = () => {
  const [desValue, setDesValue] = useState("");
  const [reqValue, setReqValue] = useState("");

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  return (
    <Section className="container">
      <Form>
        <LinkContainer to={"/admin/careers"}>
          <Button variant="outline-dark" className="float-right">
            Back
          </Button>
        </LinkContainer>

        <Title darkmode={darkMode}>Add Career</Title>
        <Form.Group className="mb-3" controlId="formCareerTitle">
          <Form.Label>Career Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Career Title" />
        </Form.Group>
        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="formDepartmentName">
              <Form.Label>Department Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Department Name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Work Experience</Form.Label>
              <Form.Control type="number" placeholder="Enter Work Experience" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City Name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State/Province</Form.Label>
              <Form.Control type="number" placeholder="Enter Province No." />
            </Form.Group>
          </Col>
        </Row>
        <CareerContainer darkmode={darkMode}>
          <h2>Career Description</h2>
          <ReactQuill theme="snow" value={desValue} onChange={setDesValue} />
        </CareerContainer>

        <CareerContainer darkmode={darkMode}>
          <h2>Career Requirements</h2>
          <ReactQuill theme="snow" value={reqValue} onChange={setReqValue} />
        </CareerContainer>
        <Button variant="outline-dark">Add</Button>
      </Form>
    </Section>
  );
};

export default CareerAdd;
