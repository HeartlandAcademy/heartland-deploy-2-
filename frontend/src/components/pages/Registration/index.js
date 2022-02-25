import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReCAPTCHA from "react-google-recaptcha";

import Background from "../../../assets/others/Background.jpg";
import { toast, ToastContainer } from "react-toastify";
import Meta from "../../contents/Meta";
import Message from "../../contents/Message";
import { REGISTRATION_CREATE_RESET } from "../../../actions/types";
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
  const [showError, setShowError] = useState(false);
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
      toast.success("Thanks for Registration!");
      dispatch({ type: REGISTRATION_CREATE_RESET });
      clearForm();
    }
  }, [success, history]);

  let handleChange = (value) => {
    setToken(value);
  };

  const dispatch = useDispatch();

  const registrationHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (token === "") {
        setShowError(true);
      } else {
        setShowError(false);
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
    }
    setValidated(true);
  };

  return (
    <>
      <Meta title="Registration" />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        limit={3}
      />
      <RegisterHeader>
        <RegisterInfo>
          <h3>BE A PART OF US</h3>
          <p>Take the next step towards your career....</p>
        </RegisterInfo>
      </RegisterHeader>
      <Container>
        <Section1 className="container registerForm">
          {showError && (
            <Message variant="danger">Please fill out the reCAPTCHA </Message>
          )}

          <Form noValidate validated={validated} onSubmit={registrationHandler}>
            <div>
              <p>
                Please fill out the form to apply or you can also download the
                admission application presented below and email it at
                <strong> info@heartlandacademy.edu.np</strong>.
              </p>

              <a href="/assets/admission.pdf" download>
                Admission Form <i className="fas fa-arrow-circle-down" />
              </a>
            </div>

            <h4 className="mt-3">Contact Details</h4>

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
            <Row className="g-2">
              <Col md>
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
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Address">
                  <Form.Control type="text" placeholder="Address" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide valid Address.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>

            <h4>Course Preference</h4>

            <FloatingLabel controlId="floatingSelect" label="Level">
              <Form.Select aria-label="Floating label select example">
                <option value="1">Preschool</option>
                <option value="2">Primary</option>
                <option value="3">Lower Secondary</option>
                <option value="4">Junior Higher Secondary</option>
                <option value="5">Senior Higher Secondary</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingSelect" label="Faculty">
              <Form.Select aria-label="Floating label select example">
                <option value="1">Science</option>
                <option value="2">Management</option>
                <option value="3">Education</option>
              </Form.Select>
            </FloatingLabel>

            <h4>Additional Information</h4>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>A copy of Marksheet/Gradesheet (Latest)</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>A copy of Character Certificate</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-5">
              <Form.Label>PP Size Photo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <h4>Application Form</h4>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Write an application"
            >
              <Form.Control
                as="textarea"
                style={{ height: "200px" }}
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
                required
              />
            </FloatingLabel>

            <h5 style={{ textAlign: "center" }}>OR</h5>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Attach Application Letter</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

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
