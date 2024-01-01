import { useState } from "react";
import styled from "styled-components";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./WomenContact.css";

import { MdLocationPin } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

import { BASE_URL } from "../../../api";
import Map from "../../../assets/others/map.jpg";
import ImageHeader from "../../contents/ImageHeader";
import Meta from "../../contents/Meta";
import Loader from "../../contents/Loader";
import AltImageHeader from "../../contents/AltImageHeader";

const ContactCard = styled.div`
  display: flex;
  padding: 40px 30px;
  flex-direction: row;
  gap: 30px;
  background: #fff;
  box-shadow: 0 1px 15px 0 rgba(62, 65, 159, 0.1);
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MainInfo = styled.div`
  margin: 100px 0 80px 0;
`;

const CardInfo = styled.div`
  box-shadow: 0 5px 15px 0 rgba(62, 65, 159, 0.1);
  padding: 40px;
  text-align: center;
`;

const IconWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 50%;
  height: 85px;
  line-height: 85px;
  margin: 0 auto;
  text-align: center;
  width: 85px;
`;

const TxtWrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin: 20px 0;
  }
  p {
    color: #625f71;
    font-size: 18px;
    line-height: 1.8em;
    }
  }
`;

const QueTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 85px;
  color: #1a1729;
  font-family: "Urbanist", sans-serif;
  text-align: center;
`;

const InputForm = styled.div`
  flex: 3;
`;

const Section2 = styled.div``;

const WContact = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setIsLoading(true);
      await fetch(`${BASE_URL}/api/contact/send`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;

          if (resData.status === "success") {
            setIsLoading(false);
            toast.success("Thanks. We will contact you soon!");
          } else if (resData.status === "fail") {
            console.log(resData);
            setIsLoading(false);
            toast.error(
              "Seems like there was a problem. Please try again later."
            );
          }
        })
        .then(() => {
          setMailerState({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        });
    }
  };

  return (
    <>
      <Meta title="Contact Us" />
      <AltImageHeader mainTitle={"Contact Us"} title={"Contact"} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        limit={3}
      />

      <Container>
        <MainInfo>
          <Row>
            <Col>
              <CardInfo>
                <IconWrapper>
                  <MdLocationPin size={42} />
                </IconWrapper>
                <TxtWrapper>
                  <h2>Address</h2>
                  <p>Bafal-13, Kathmandu</p>
                </TxtWrapper>
              </CardInfo>
            </Col>
            <Col>
              <CardInfo>
                <IconWrapper>
                  <HiOutlineMail size={42} />
                </IconWrapper>
                <TxtWrapper>
                  <h2>Email Us</h2>
                  <p>head_womencollege@heartlandacademy.edu.np</p>
                </TxtWrapper>
              </CardInfo>
            </Col>
            <Col>
              <CardInfo>
                <IconWrapper>
                  <LuPhone size={42} />
                </IconWrapper>
                <TxtWrapper>
                  <h2>Call Us</h2>
                  <p>01-5906017</p>
                </TxtWrapper>
              </CardInfo>
            </Col>
          </Row>
        </MainInfo>
        <QueTitle>Have Any Question?</QueTitle>

        <ContactCard>
          <InputForm>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    className="txt-input"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={mailerState.name}
                    onChange={handleStateChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your fullname.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    className="txt-input"
                    type="email"
                    name="email"
                    value={mailerState.email}
                    placeholder="Enter email"
                    onChange={handleStateChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridSubject">
                <Form.Control
                  className="txt-input"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={mailerState.subject}
                  onChange={handleStateChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Subject field cannot be empty.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Control
                  className="txt-input"
                  as="textarea"
                  placeholder="Leave a message here"
                  value={mailerState.message}
                  onChange={handleStateChange}
                  required
                  name="message"
                  style={{ height: "100px" }}
                />
                <Form.Control.Feedback type="invalid">
                  Message field cannot be empty.
                </Form.Control.Feedback>
              </Form.Group>
              {isLoading && <Loader />}

              <Button
                variant="primary"
                type="submit"
                className="btn-success"
                size="lg"
              >
                Submit Now
              </Button>
            </Form>
          </InputForm>
        </ContactCard>
      </Container>

      <Section2>
        <iframe
          title="Heartland Women Center"
          style={{ width: "100%", height: "450px", border: "none" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4737663599335!2d85.28409147618106!3d27.7026549256972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197dff19f97d%3A0x9f37e999e2547d3!2sHeartland%20Academy%2C%20Center%20for%20Women!5e0!3m2!1sen!2snp!4v1704144236535!5m2!1sen!2snp"
        ></iframe>
      </Section2>
    </>
  );
};

export default WContact;
