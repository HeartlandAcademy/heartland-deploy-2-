import { useState, useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import Message from "../../contents/Message";
import Loader from "../../contents/Loader";
import { createWEvents } from "../../../actions/eventsActions";
import { WEVENTS_CREATE_RESET } from "../../../actions/types";

const Section = styled.div`
  padding: 30px 40px;
  min-height: 100vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
  h2 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const ButtonContent = styled.div`
  margin: 20px 40px;
`;

const AdminWEvents = ({ history }) => {
  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [validated, setValidated] = useState(false);

  const wEventsCreate = useSelector((state) => state.wEventsCreate);
  const { loading, wEvents: events, success, error } = wEventsCreate;

  const dispatch = useDispatch();

  function clearForm() {
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  }

  useEffect(() => {
    if (success) {
      clearForm();
      dispatch({ type: WEVENTS_CREATE_RESET });
      toast.success("Event Added Successfully");
      setValidated(false);
    }
  }, [history, events, success, dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (startDate === "" || endDate === "") {
        toast("Please enter both start and end dates.");
        return;
      }

      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      if (startDateObj >= endDateObj) {
        toast("End date must be after the start date.");
        return;
      }

      const timeDifference = endDateObj - startDateObj;
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference > 20) {
        toast("Event duration cannot exceed 20 days.");
        return;
      }
      dispatch(createWEvents(title, description, startDate, endDate));
    }
    setValidated(true);
  };

  return (
    <Section className="container" darkmode={darkMode}>
      <Title darkmode={darkMode}>
        <h2>Add New Upcoming Event</h2>
        <ButtonContent>
          <LinkContainer to={`/admin/events/all`}>
            <Button className={darkMode ? "btn-dark" : "btn-primary"}>
              View All
            </Button>
          </LinkContainer>
        </ButtonContent>
      </Title>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form
        noValidate
        validated={validated}
        className="container p-4 form-group"
        onSubmit={submitHandler}
      >
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide Title
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Select Start Date</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please select Start Date
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Select End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please select End Date
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide Description
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className={
            darkMode ? "btn-dark mt-4 btn-lg" : "btn-primary mt-4 btn-lg"
          }
        >
          Add
        </Button>
      </Form>
    </Section>
  );
};

export default AdminWEvents;
