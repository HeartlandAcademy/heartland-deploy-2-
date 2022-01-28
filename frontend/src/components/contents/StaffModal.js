import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Modal, Button, Form, Container } from "react-bootstrap";
import { createStaffs } from "../../actions/staffsActions";
import { toast } from "react-toastify";
import Message from "./Message";

export default function StaffsModal(props) {
  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const staffsCreate = useSelector((state) => state.staffsCreate);
  const { success, error } = staffsCreate;

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);

  function clearForm() {
    setFullName("");
    setEmail("");
    setPhone("");
  }

  useEffect(() => {
    if (success) {
      clearForm();
      toast.success("Staff Added Successfully");
      setValidated(false);
    }
  }, [success]);

  const staffHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(createStaffs(fullName, email, phone));
    }
    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={darkMode ? "dark-modal" : "white-modal"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Add New Staff</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {error && <Message variant="danger">{error}</Message>}
          <Form
            noValidate
            validated={validated}
            className="container form-group"
            onSubmit={staffHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide FullName
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid phone number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid email address
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              ADD
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
