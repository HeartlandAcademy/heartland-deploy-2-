import React from "react";
import styled from "styled-components";

import defaultImg from "../../assets/default/default.png";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialBox = styled.div`
  width: 610px;
  position: relative;
  display: block;
  background-color: #fff;
  padding: 70px 15px 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  @media (max-width: 1900px) {
    width: 550px;
  }
  @media (max-width: 1734px) {
    width: 500px;
  }
  @media (max-width: 1594px) {
    width: 460px;
  }
  @media (max-width: 1464px) {
    width: 430px;
  }
  @media (max-width: 1382px) {
    width: 400px;
  }
  @media (max-width: 1276px) {
    width: 350px;
    padding: 50px 15px 15px;
  }
  @media (max-width: 1118px) {
    width: 330px;
  }
  @media (max-width: 1062px) {
    width: 300px;
  }
  @media (max-width: 1026px) {
    width: 460px;
  }
  @media (max-width: 990px) {
    width: 400px;
  }
  @media (max-width: 990px) {
    width: 360px;
  }
  @media (max-width: 778px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
  @media (max-width: 569px) {
    width: 98%;
  }
`;

const TestimonialIcon = styled.div`
  position: absolute;
  right: 40px;
  top: -70px;
  height: 140px;
  width: 140px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  @media (max-width: 1276px) {
    height: 120px;
    width: 120px;
  }
`;

const TestimonialTxt = styled.div`
  margin-top: 40px;
  h4 {
    position: relative;
    font-size: 20px;
    line-height: 36px;
    color: #7d8185;
    margin-bottom: 30px;
  }
`;

const TestimonialAltTxt = styled.div`
  h4 {
    margin-bottom: 2px;
    line-height: 1.2em;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    text-transform: uppercase;
    display: block;
    font-size: 13px;
    color: #808287;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-align: left;
  }
`;

const TestimonialInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: blue;
`;

const TestimonialCard = ({ testimonial }) => {
  return (
    <TestimonialBox>
      <TestimonialIcon>
        <img
          src={testimonial?.image ?? defaultImg}
          alt="user"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </TestimonialIcon>
      <TestimonialTxt>
        <h4>{testimonial?.message ?? ""}</h4>
        <TestimonialInfo>
          <IconWrapper>
            <BiSolidQuoteLeft color="#fff" />
          </IconWrapper>
          <TestimonialAltTxt>
            <h4>{testimonial?.fullName ?? ""}</h4>
            <p>{testimonial?.desc ?? ""}</p>
          </TestimonialAltTxt>
        </TestimonialInfo>
      </TestimonialTxt>
    </TestimonialBox>
  );
};

export default TestimonialCard;
