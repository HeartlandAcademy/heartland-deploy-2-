import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

import Meta from "../../contents/Meta";
import heartland from "../../../assets/carousel/heartland.jpg";
import ImageHeader from "../../contents/ImageHeader";

const Title = styled.div`
  color: rgb(1, 34, 55);
  font-size: 50px;
  margin: 50px 0;
`;

const index = () => {
  return (
    <>
      <Meta title="HA Careers" />
      <ImageHeader mtitle="Heartland" title="Careers" image={heartland} />
      <Container>
        <Title>Career At HA</Title>
        <h5>
          Join Us. For over two decades, we’ve worked with Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Corporis error ut provident vel
          repellendus nihil atque possimus aliquam, mollitia tempora neque
          voluptate debitis illum veniam.Numquam blanditiis dignissimos
          laboriosam illum ut officia. Nam aperiam autem nesciunt perferendis
          id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          nulla sequi pariatur quam animi ipsum molestias assumenda cumque
        </h5>
        <Row xs={1} sm={3} md={4} className="p-4 justify-content-center">
          <LinkContainer to={"/careers/12333"}>
            <Col className="card p-3 careerCard">
              <h4>This is Job Title</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
              </p>
            </Col>
          </LinkContainer>

          <LinkContainer to={"/careers/12333"}>
            <Col className="card p-3 careerCard">
              <h4>This is Job Title</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
              </p>
            </Col>
          </LinkContainer>

          <LinkContainer to={"/careers/12333"}>
            <Col className="card p-3 careerCard">
              <h4>This is Job Title</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
              </p>
            </Col>
          </LinkContainer>

          <LinkContainer to={"/careers/12333"}>
            <Col className="card p-3 careerCard">
              <h4>This is Job Title</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
              </p>
            </Col>
          </LinkContainer>

          <LinkContainer to={"/careers/12333"}>
            <Col className="card p-3 careerCard">
              <h4>This is Job Title</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
              </p>
            </Col>
          </LinkContainer>
        </Row>
      </Container>
    </>
  );
};

export default index;
