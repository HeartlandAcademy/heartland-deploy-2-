import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card } from "react-bootstrap";

import one from "../../assets/executives/one.jpg";
import two from "../../assets/executives/two.jpg";
import three from "../../assets/executives/three.JPG";
import four from "../../assets/executives/four.jpg";
import five from "../../assets/executives/five.jpg";
import six from "../../assets/executives/six.jpg";
import seven from "../../assets/executives/seven.jpg";
import eight from "../../assets/executives/eight.jpg";
import nine from "../../assets/executives/nine.jpg";
import ten from "../../assets/executives/ten.jpg";
import eleven from "../../assets/executives/eleven.png";

const Team = styled.div`
  background-color: #111;
  padding: 100px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const Heartland = styled.div`
  img {
    height: 200px;
  }
`;

const Teams = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Team>
        <Title>Heatland Executive Team</Title>
      </Team>

      <Carousel
        swipeable={false}
        draggable={false}
        arrows
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        containerClass="carousel-container name-card"
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-30-px single"
      >
        <Heartland>
          <Card style={{ width: "14rem", margin: "20px" }}>
            <Card.Img variant="top" src={one} />
            <Card.Body>
              <Card.Title>Mr. Karan Singh Goyala</Card.Title>
              <Card.Text>HA Principal</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={two} />
            <Card.Body>
              <Card.Title>Miss Hasina Maharjan</Card.Title>
              <Card.Text>Primary CGRP</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={three} />
            <Card.Body>
              <Card.Title>Mr. Patrick Frank Price</Card.Title>
              <Card.Text>CEO of CLCR, Australia</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={four} />
            <Card.Body>
              <Card.Title>Mrs. Chanda Koirala</Card.Title>
              <Card.Text>School Coordinator</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={five} />
            <Card.Body>
              <Card.Title>Mr. Bhim Singh Saud</Card.Title>
              <Card.Text>HA Administrator</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={six} />
            <Card.Body>
              <Card.Title>Mr. Man BDR. Ale</Card.Title>
              <Card.Text>President of CLCR Nepal</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={seven} />
            <Card.Body>
              <Card.Title>Mr. Ram Datta Mishra</Card.Title>
              <Card.Text>Program Coordinator CLCR Nepal</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={eight} />
            <Card.Body>
              <Card.Title>Miss Indira Karki</Card.Title>
              <Card.Text>Finance Administrator</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={nine} />
            <Card.Body>
              <Card.Title>Mrs. Merisha Shrestha</Card.Title>
              <Card.Text>Pre-primary CGRP</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={ten} />
            <Card.Body>
              <Card.Title>Mr. Prem Gaudel</Card.Title>
              <Card.Text>Academic Coordinator</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
        <Heartland>
          <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={eleven} />
            <Card.Body>
              <Card.Title>Mr. Ram PD. Upadhayaya</Card.Title>
              <Card.Text>Karuna Trust Executive</Card.Text>
            </Card.Body>
          </Card>
        </Heartland>
      </Carousel>
    </>
  );
};

export default Teams;
