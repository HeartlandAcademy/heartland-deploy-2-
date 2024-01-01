import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { listWCarousel } from "../../actions/carouselActions";

import mainImage from "../../assets/others/main-carousel.jpg";
import Message from "./Message";
import default2 from "../../assets/default/default2.png";

const fadeInTop = keyframes` 
  from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
`;

const fadeInBottom = keyframes`
0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Welcome = styled.div`
  animation-name: ${fadeInTop};
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  button {
    width: 150px;
    height: 44px;
    text-align: center;
    color: rgb(255, 255, 255);
    border: none;
  }
`;

const AbtBtn = styled.button`
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgb(0 176 87 / var(--tw-bg-opacity));
  border-radius: 50px;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  display: flex;
  font-family: Poppins, sans-serif;
  padding: 9px;
  display: flex;
  justify-content: center;
  &:hover {
    background: rgb(0, 148, 68);
  }
`;

const CarouselHead = styled.p`
  font-size: 55px;
  line-height: 60px;
  text-transform: uppercase;
  margin-bottom: 8px;
  animation-name: ${fadeInBottom};
  animation-duration: 2s;
  text-shadow: rgba(0, 0, 0, 0.3) 0 0 20px;
  letter-spacing: -2px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const CarouselInfo = styled.h2`
  font-size: 19px;
  line-height: 28px;
  color: #fff;
  font-weight: 300;
  animation-name: ${fadeInTop};
  animation-duration: 3s;
  margin-bottom: 35px;
`;

const CarouselDescContent = styled.div`
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 700px) {
    padding: 5px 0px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const AltCarousel = () => {
  const availableWCarousel = useSelector((state) => state.availableWCarousel);
  const { loading, wCarousel: carousel, error } = availableWCarousel;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listWCarousel());
  }, [dispatch]);

  const CarouselLoader = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slideImg"
            src={default2}
            alt="default"
          />
        </Carousel.Item>
      </Carousel>
    );
  };

  return (
    <>
      {loading ? (
        <CarouselLoader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Carousel fade className="altCarousel">
          <Carousel.Item interval={33300}>
            <img
              className="d-block w-100 wcarousel"
              src={mainImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <CarouselHead>Heartland Academy Centre for Women</CarouselHead>
              <CarouselInfo>
                Supported by The Centre for Learning and Childrens Rights
                (CLCR), Australia, and Women for Change.
              </CarouselInfo>
              <Welcome>
                <LinkContainer to="/about">
                  <AbtBtn>Learn More</AbtBtn>
                </LinkContainer>
              </Welcome>
            </Carousel.Caption>
          </Carousel.Item>
          {carousel.map((c) => (
            <Carousel.Item interval={3300000} key={c._id}>
              <img
                className="d-block w-100"
                src={c.image}
                alt="Carousel Images"
              />

              <Carousel.Caption>
                <CarouselDescContent>
                  <CarouselHead>{c.title}</CarouselHead>
                  <CarouselInfo>{c.description}</CarouselInfo>
                </CarouselDescContent>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default AltCarousel;
