import React, { useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../contents/Loader";
import Message from "../../contents/Message";

import ImageHeader from "../../contents/ImageHeader";
import heartland from "../../../assets/carousel/heartland.jpg";
import Meta from "../../contents/Meta";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { listCareerDetails } from "../../../actions/careersActions";

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
  h4 {
    color: rgb(1, 34, 55);
    padding: 15px 0;
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

const CareersInfo = ({ match }) => {
  const dispatch = useDispatch();

  const careerDetails = useSelector((state) => state.careerDetails);
  const { loading, singleCareer: career, error } = careerDetails;

  useEffect(() => {
    dispatch(listCareerDetails(match.params.id));
  }, [dispatch, match]);

  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  return (
    <>
      <Meta title="HA Careers | Title" />
      <ImageHeader mtitle="Heartland" title="Careers" image={heartland} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Title>{career.title}</Title>
          <Container>
            <Desc>
              <h2>
                <span>Basic Career Info</span>
              </h2>
              <h5>Career Category: {career.careerCategory}</h5>
              <h5>No. of Vacancy/s: {career.noOfVacancy}</h5>
              <h5>Employment Type: {career.employmentType}</h5>
              <h5>Location: {career.location}</h5>
              <h5>Offered Salary: {career.offeredSalary}</h5>
              <h5>
                Appply Before: {career.applyBefore} (4 days, 11 hours from now){" "}
              </h5>
            </Desc>
            <Desc>
              <h2>
                <span>About HA</span>
              </h2>
              <h5>
                Heartland Academy(HA) is a democratic school practicing quality
                and non-violent education which provides co-educational
                education from nursery all the way through to Plus Two.Heartland
                Academy(HA) is a democratic school practicing quality and
                non-violent education which provides co-educational education
                from nursery all the way through to Plus Two.Heartland
                Academy(HA) is a democratic school practicing quality and
                non-violent education which provides co-educational education
                from nursery all the way through to Plus Two.
              </h5>
            </Desc>
            <Desc>
              <h2>
                <span>Career Specification</span>
              </h2>
              <h5>Education Level: {career.educationLevel}</h5>
              <h5>Experience Required: {career.experienceRequired}</h5>

              <h4>
                <span>Other Specification</span>
              </h4>
              {htmlFrom(career.careerSpecs)}
            </Desc>
            <Desc>
              <h2>
                <span>Career Description</span>
              </h2>
              {htmlFrom(career.careerDesc)}
            </Desc>
            <Desc>
              <h2>
                <span>Note: </span>
              </h2>
              {htmlFrom(career.note)}
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
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
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
      )}
    </>
  );
};

export default CareersInfo;
