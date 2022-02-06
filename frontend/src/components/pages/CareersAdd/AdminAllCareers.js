import React from "react";
import styled from "styled-components";
import { Row, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Section = styled.div`
  height: 100vh;
  padding: 50px 100px;
  @media (max-width: 479px) {
    padding: 70px 30px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
  h2 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
  button {
    background: ${(props) => (props.darkmode ? "#202124" : "#111")};
  }
`;

const ButtonContent = styled.div`
  margin: 20px 40px;
`;

const CareerCard = styled.div`
  background: ${(props) => (props.darkmode ? "#202124" : "#fff")};
  h4 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  button {
    padding: 8px 15px;
  }
`;

const AdminAllCareers = () => {
  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  return (
    <Section>
      <Title darkmode={darkMode}>
        <h2>Added Careers</h2>
        <ButtonContent>
          <LinkContainer to={`/admin/careers/add`}>
            <Button className={darkMode ? "btn-dark" : "btn-primary"}>
              Add New
            </Button>
          </LinkContainer>
        </ButtonContent>
      </Title>
      <Row xs={1} sm={3} md={4} className="p-4 justify-content-center">
        <CareerCard className="col card p-4 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>

        <CareerCard className="col card p-4 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>

        <CareerCard className="col card p-4 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>

        <CareerCard className="col card p-4 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>

        <CareerCard className="col card p-3 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>

        <CareerCard className="col card p-4 m-4" darkmode={darkMode}>
          <h4>This is Job Title</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
          </p>
          <ButtonContainer>
            <LinkContainer to={"/admin/careers/add/11111"}>
              <Button variant="light">View</Button>
            </LinkContainer>
          </ButtonContainer>
        </CareerCard>
      </Row>
    </Section>
  );
};

export default AdminAllCareers;
