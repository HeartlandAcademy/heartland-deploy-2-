import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-bootstrap";

import Default from "../../../assets/default/default.png";
import Loader from "../../contents/Loader";
import { deleteTeams, listTeams } from "../../../actions/teamsActions";
import TeamsModal from "../../contents/TeamsModal";
import { TEAMS_CREATE_RESET } from "../../../actions/types";
import {
  listStudentsTestimonails,
  listVisitorsTestimonails,
} from "../../../actions/testimonialsActions";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Section = styled.div`
  padding: 30px 40px;
  min-height: 100vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
  h3 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
    margin-top: 10px;
  }
  h4 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const ButtonContent = styled.div`
  margin-top: 10px;
`;

const TeamsContainer = styled.div`
  margin: 20px 0;
  h2 {
    margin-bottom: 30px;
  }
`;

const Heartland = styled.div`
  img {
    height: 200px;
  }
  span {
    cursor: pointer;
  }
`;

const MessageCard = styled.div`
  margin: 30px;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f16101;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -5px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 1px solid #f16101;
  }
`;

const Msg = styled.div`
  font-size: 16px;
  line-height: 34px;
  font-weight: 500;
  padding-bottom: 30px;
  margin: 0 0 40px;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
`;

const Profile = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`;

const ImageCard = styled.div`
  img {
    width: 58px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  color: #012237;
  font-weight: 600;
  line-height: 1em;
  margin: 0 0 10px;
`;

const Desc = styled.div`
  margin: 0;
  line-height: 1em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #81868a;
`;

const VisitorProfile = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  img {
    margin-top: 7px;
    max-width: 90px;
    max-height: 70px;
    border-radius: 50%;
    vertical-align: middle;
    @media (max-width: 770px) {
      margin: auto;
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const ProfileDesc = styled.div`
  h6 {
    margin-top: 10px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
  }
`;

const VisitorMsg = styled.div`
  text-align: center;
  font-size: 16px;
  color: #969696;
`;

const VisitorMessageCard = styled.div`
  transition: 0.3s ease;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: 3px solid #e5e5e5;
  padding: 16px 25px 25px;
  border-radius: 12px;
  margin: 30px 20px 0px 20px;
  span {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px 0;
  }
  &:hover {
    border-color: #05ab90;
  }
`;

const TestimonialCreate = ({ history }) => {
  const [modalShow, setModalShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const addedTeams = useSelector((state) => state.addedTeams);
  const { loading, teams, error: addedError } = addedTeams;

  const teamsCreate = useSelector((state) => state.teamsCreate);
  const { success, error } = teamsCreate;

  const teamsDelete = useSelector((state) => state.teamsDelete);
  const { success: deleteSuccess, error: deleteError } = teamsDelete;

  const addedStudentsTestimonials = useSelector(
    (state) => state.addedStudentsTestimonials
  );
  const {
    loading: studentLoading,
    error: studentError,
    studentsTestimonials,
  } = addedStudentsTestimonials;

  const addedVisitorsTestimonials = useSelector(
    (state) => state.addedVisitorsTestimonials
  );
  const {
    loading: visitorLoading,
    error: visitorError,
    visitorsTestimonials,
  } = addedVisitorsTestimonials;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(listTeams());
      dispatch(listStudentsTestimonails());
      dispatch(listVisitorsTestimonails());
      if (deleteSuccess) {
        dispatch(listTeams());
      }
      if (success) {
        dispatch(listTeams());
        dispatch({ type: TEAMS_CREATE_RESET });
        setModalShow(false);
      }
    } else {
      history.push("/admin/login");
    }
  }, [dispatch, history, userInfo, success, deleteSuccess]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const teamResponsive = {
    0: { items: 1 },
    568: { items: 2 },
    924: { items: 3 },
    1024: { items: 4 },
  };

  const teamDeleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTeams(id));
      toast.success("Team Deleted Successfully");
    }
  };

  const visitorDeleteHandler = (id) => {};

  return (
    <Section className="container">
      <TeamsContainer>
        <Title darkmode={darkMode}>
          <h3>Teams</h3>
          <ButtonContent>
            <Button
              onClick={() => setModalShow(true)}
              className={darkMode ? "btn-dark" : "btn-primary"}
            >
              <i className="fas fa-plus"></i> New
            </Button>
          </ButtonContent>
          <TeamsModal show={modalShow} onHide={() => setModalShow(false)} />
        </Title>

        {loading ? (
          <Loader />
        ) : error ? (
          <h3>dsdfsdf</h3>
        ) : (
          <AliceCarousel
            mouseTracking
            responsive={teamResponsive}
            controlsStrategy="alternate"
          >
            {teams &&
              teams.map((team) => (
                <Heartland>
                  <Card style={{ width: "14rem", margin: "20px" }}>
                    <Card.Img variant="top" src={team.image} />
                    <Card.Body
                      style={{
                        backgroundColor: darkMode ? "#202124" : "#fff",
                      }}
                    >
                      <Card.Title>{team.fullName}</Card.Title>
                      <Card.Text>
                        <p>{team.desc}</p>
                        <span onClick={() => teamDeleteHandler(team._id)}>
                          <i class="fas fa-trash"></i>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Heartland>
              ))}
          </AliceCarousel>
        )}
      </TeamsContainer>

      <div>
        <Title darkmode={darkMode}>
          <h3>Students</h3>
          <ButtonContent>
            <Button
              onClick={() => setModalShow(true)}
              className={darkMode ? "btn-dark" : "btn-primary"}
            >
              <i className="fas fa-plus"></i> New
            </Button>
          </ButtonContent>
          <TeamsModal show={modalShow} onHide={() => setModalShow(false)} />
        </Title>

        {studentLoading ? (
          <Loader />
        ) : studentError ? (
          <h3>sfsdsdf</h3>
        ) : (
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
          >
            {studentsTestimonials &&
              studentsTestimonials.students.map((student) => (
                <>
                  <Top>
                    <i className="fas fa-quote-left"></i>
                  </Top>
                  <Msg>{student.message}</Msg>
                  <Profile>
                    <ImageCard>
                      <img src={Default} alt="student" />
                    </ImageCard>
                    <Name>{student.fullName}</Name>
                    <Desc>{student.desc}</Desc>
                  </Profile>
                </>
              ))}
          </AliceCarousel>
        )}
      </div>
      <div>
        <Title darkmode={darkMode}>
          <h3>Visitors</h3>
          <ButtonContent>
            <Button
              onClick={() => setModalShow(true)}
              className={darkMode ? "btn-dark" : "btn-primary"}
            >
              <i className="fas fa-plus"></i> New
            </Button>
          </ButtonContent>
          <TeamsModal show={modalShow} onHide={() => setModalShow(false)} />
        </Title>

        {visitorLoading ? (
          <Loader />
        ) : error ? (
          <h3>asdasd</h3>
        ) : (
          <>
            {visitorLoading ? (
              <Loader />
            ) : visitorError ? (
              <h3>dsdfsdf</h3>
            ) : (
              <AliceCarousel
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
              >
                {visitorsTestimonials &&
                  visitorsTestimonials.visitors.map((visitor) => (
                    <VisitorMessageCard>
                      <VisitorMsg>{visitor.message}</VisitorMsg>
                      <VisitorProfile>
                        <img src={Default} alt="student" />
                        <ProfileDesc>
                          <h6>{visitor.fullName}</h6>
                          <p>{visitor.desc}</p>
                        </ProfileDesc>
                      </VisitorProfile>
                      <span onClick={() => visitorDeleteHandler()}>
                        <i class="fas fa-trash"></i>
                      </span>
                    </VisitorMessageCard>
                  ))}
              </AliceCarousel>
            )}
          </>
        )}
      </div>
    </Section>
  );
};

export default TestimonialCreate;
