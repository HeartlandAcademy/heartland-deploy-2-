import React from "react";
import styled from "styled-components";

import ImageHeader from "../../contents/ImageHeader";
import heartland from "../../../assets/carousel/heartland.jpg";
import Meta from "../../contents/Meta";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const Title = styled.div`
  color: rgb(1, 34, 55);
  font-size: 50px;
  margin: 40px 0 10px 0;
`;

const Desc = styled.div`
  margin: 40px 0;
  h2 {
    color: rgb(1, 34, 55);
    padding-bottom: 15px;
  }
  span {
    border-bottom: 2px solid rgb(0, 148, 68);
  }
  li {
    font-size: 18px;
    padding: 5px 0;
    color: #111;
  }
`;

const ButtonContainer = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  button {
    width: 100%;
  }
`;

const CareerTitle = styled.h2`
  margin: 20px 0 40px 0;
  span {
    border-bottom: 2px solid rgb(0, 148, 68);
  }
`;

const index = () => {
  return (
    <>
      <Meta title="HA Careers | Title" />
      <ImageHeader mtitle="Heartland" title="Careers" image={heartland} />
      <Container>
        <Title>Career Title</Title>
        <Container>
          <Desc>
            <h2>
              <span>Career Info</span>
            </h2>
            <h5>Department Name: Random</h5>
            <h5>Work Experience: 1-3 years</h5>
            <h5>City: Kathmandu</h5>
            <h5>State/Province: Province No.4</h5>
          </Desc>
          <Desc>
            <h2>
              <span>About HA</span>
            </h2>
            <h5>
              Heartland Academy(HA) is a democratic school practicing quality
              and non-violent education which provides co-educational education
              from nursery all the way through to Plus Two.Heartland Academy(HA)
              is a democratic school practicing quality and non-violent
              education which provides co-educational education from nursery all
              the way through to Plus Two.Heartland Academy(HA) is a democratic
              school practicing quality and non-violent education which provides
              co-educational education from nursery all the way through to Plus
              Two.
            </h5>
          </Desc>
          <Desc>
            <h2>
              <span>Career Desc</span>
            </h2>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </Desc>
          <Desc>
            <h2>
              <span>Career Requirements</span>
            </h2>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </Desc>
          <>
            <CareerTitle>
              <span>Apply For This Post</span>
            </CareerTitle>
            <Form>
              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter fullname" />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email address" />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Resume / CV</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </>
          <ButtonContainer>
            <div>
              <Button size="lg">Apply</Button>
            </div>
            <div>
              <Button size="lg">Cancel</Button>
            </div>
          </ButtonContainer>
        </Container>
      </Container>
    </>
  );
};

export default index;
