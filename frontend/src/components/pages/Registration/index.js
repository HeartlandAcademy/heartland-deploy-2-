import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReCAPTCHA from "react-google-recaptcha";

import Background from "../../../assets/others/Background.jpg";
import Meta from "../../contents/Meta";
import { createNewRegistrations } from "../../../actions/registrationActions";
import "./index.css";

const RegisterHeader = styled.div`
  text-align: center;
  background-position: center;
  background-image: url(${Background});
`;

const RegisterInfo = styled.div`
  background-color: rgba(24, 43, 73);
  opacity: 0.98;
  padding: 120px;
  h3 {
    font-size: 70px;
    color: #fff;
  }
  p {
    font-size: 40px;
    color: rgb(0, 148, 68);
    margin-bottom: 20px;
  }
`;

const RegisterBtn = styled.button`
  font-size: 22px;
  width: 100%;
  padding: 15px;
`;

const Section1 = styled.div`
  padding: 50px 80px;
  margin-top: -100px;
  position: relative;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin-bottom: 130px;
`;

const Registration = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [queries, setQueries] = useState("");
  const [token, setToken] = useState("");
  const [validated, setValidated] = useState(false);

  const createRegistrations = useSelector((state) => state.createRegistrations);
  const { success, error } = createRegistrations;

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setQueries("");
    setValidated(false);
  }

  useEffect(() => {
    if (success) {
      alert("Thanks for Registration");
      history.push("/");
      clearForm();
    }
  }, [success, history]);

  let handleChange = (value) => {
    setToken(value);
  };

  const dispatch = useDispatch();

  const registrationHandler = (event) => {
    console.log(token);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(
        createNewRegistrations(
          firstName,
          lastName,
          email,
          phone,
          queries,
          token
        )
      );
    }
    setValidated(true);
  };

  return (
    <>
      <Meta title="Registration" />
      <RegisterHeader>
        <RegisterInfo>
          <h3>BE A PART OF US</h3>
          <p>Take the next step towards your career....</p>
        </RegisterInfo>
      </RegisterHeader>
      <Container>
        <Section1 className="container registerForm">
          <Form noValidate validated={validated} onSubmit={registrationHandler}>
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="First Name">
                  <Form.Control
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide First Name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                  <Form.Control
                    type="text"
                    placeholder="Your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide Last Name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel controlId="floatingInput" label="Email address">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide Email Address.
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingNumber" label="Phone Number">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                isInvalid={error}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid Phone Number.
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Queries">
              <Form.Control
                as="textarea"
                placeholder="Place your queries here (if any)"
                style={{ height: "100px" }}
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Queries field cannot be empty.
              </Form.Control.Feedback>
            </FloatingLabel>
            <div className="my-4">
              <ReCAPTCHA
                sitekey="6Lc8c4ceAAAAAIeF4KptKI2I5b9Otiui2EwI0DlN"
                onChange={handleChange}
              />
            </div>

            <RegisterBtn className="btn btn-custom" type="submit">
              Submit
            </RegisterBtn>
          </Form>
        </Section1>
      </Container>
    </>
  );
};

export default Registration;
