import React from "react";
import styled from "styled-components";

import Shape1Img from "../../assets/others/shape1.svg";
import Shape2Img from "../../assets/others/shape2.svg";
import Shape3Img from "../../assets/others/shape3.svg";
import Shape4Img from "../../assets/others/shape4.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Section1 = styled.div`
  background: #fcf9ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ShapeOne = styled.div`
  animation: bounce 5s linear infinite;
  left: 15%;
  position: absolute;
  top: 20%;
  z-index: -1;
`;

const ShapeTwo = styled.div`
  animation: zoom-in-zoom-out 5s ease infinite;
  bottom: 50px;
  left: 50px;
  position: absolute;
  z-index: -1;
`;

const ShapeThree = styled.div`
  animation: bounceX 5s linear infinite;
  position: absolute;
  right: -30px;
  top: 40px;
  z-index: -1;
`;

const ShapeFour = styled.div`
  animation: bounceX 7s linear infinite;
  bottom: 15%;
  position: absolute;
  right: 50px;
  z-index: -1;
`;

const Title = styled.h2`
  color: #1a1729;
  font-size: 60px;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 20px;
  font-family: "Urbanist", sans-serif;
`;

const Content = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  span {
    color: #625f71;
    font-size: 20px;
    transition: all 0.3s;
    font-family: "Urbanist", sans-serif;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #625f71;
  &:hover {
    color: rgb(0, 148, 68);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AltImageHeader = ({ mainTitle, title }) => {
  return (
    <Section1>
      <TitleContainer>
        <Title>{mainTitle ?? ""}</Title>
        <Content>
          <span>
            <StyledLink exact to="/">
              Home
            </StyledLink>
          </span>
          <span>{"//"}</span>
          <span>{title ?? ""}</span>
        </Content>
      </TitleContainer>
      <ShapeOne>
        <img src={Shape1Img} alt="shape1" />
      </ShapeOne>
      <ShapeTwo>
        <img src={Shape2Img} alt="shape2" />
      </ShapeTwo>
      <ShapeThree>
        <img src={Shape3Img} alt="shape3" />
      </ShapeThree>
      <ShapeFour>
        <img src={Shape4Img} alt="shape4" />
      </ShapeFour>
    </Section1>
  );
};

export default AltImageHeader;
