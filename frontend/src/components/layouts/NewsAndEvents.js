import React, { useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Background from "../../assets/others/Background.jpg";
import { listLatestNews } from "../../actions/newsActions";
import Loader from "../contents/Loader";
import Message from "../contents/Message";
import { listUpcomingLatestEvents } from "../../actions/eventsActions";

const News = styled.div`
  padding: 40px 45px;
  span {
    color: rgb(0, 148, 68);
  }
  h4 {
    font-size: 18px;
  }
`;

const Content = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Date = styled.h3`
  font-size: 19px;
  color: blue;
  font-weight: 500;
`;

const NewsArea = styled.div`
  float: right;
`;

const NoNews = styled.div`
  font-size: 20px;
  margin-top: 200px;
  text-align: center;
`;

const NewsSection = styled.div`
  flex: 1.5;
  overflow-y: auto;
  height: 430px;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    background-color: rgb(0, 148, 68);
  }
`;

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const EventSection = styled.div`
  flex: 2;
  margin-left: 20px;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const EventBody = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 40px;
  justify-content: center;
  @media (max-width: 590px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const NoEvents = styled.div`
  font-size: 20px;
  margin-top: 180px;
  text-align: center;
`;

const SingleEvent = styled.div`
  display: flex;
  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const NewsAndEvents = () => {
  const dispatch = useDispatch();

  const latestNews = useSelector((state) => state.latestNews);
  const { loading, newsLatest, error } = latestNews;

  const upcomingLatestEvents = useSelector(
    (state) => state.upcomingLatestEvents
  );
  const {
    loading: eventLoading,
    eventsLatest: events,
    error: eventError,
  } = upcomingLatestEvents;

  useEffect(() => {
    dispatch(listLatestNews());
    dispatch(listUpcomingLatestEvents());
  }, [dispatch]);
  return (
    <News>
      <Content>
        <NewsSection>
          <NewsHeader>
            <h3>Latest News</h3>
            <LinkContainer to="/news">
              <button className="btn btn-custom">VIEW ALL</button>
            </LinkContainer>
          </NewsHeader>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              {newsLatest && newsLatest.length === 0 ? (
                <NoNews>
                  Sorry we couldn't find any latest news. Please stay updated.
                </NoNews>
              ) : (
                ""
              )}
              {newsLatest &&
                newsLatest.map((news) => (
                  <LinkContainer to={`/news/${news._id}`} key={news._id}>
                    <Card className="news">
                      <Card.Body>
                        <Date>
                          <i className="far fa-clock"></i>{" "}
                          {news.createdAt &&
                            moment(news.createdAt).format("DD-MMM-YYYY")}
                        </Date>
                        <h4>
                          {news.description &&
                            news.description.substring(0, 150)}
                          ....
                        </h4>
                        <NewsArea>{news.author}</NewsArea>
                      </Card.Body>
                    </Card>
                  </LinkContainer>
                ))}
            </>
          )}
        </NewsSection>
        <EventSection>
          <EventHeader>
            <h3>Upcoming Events</h3>
            <LinkContainer to="/events">
              <button className="btn btn-custom">View All Events</button>
            </LinkContainer>
          </EventHeader>
          <EventBody>
            {eventLoading ? (
              <Loader />
            ) : eventError ? (
              <Message variant="danger">{eventError}</Message>
            ) : (
              <>
                {events && events.length === 0 ? (
                  <NoEvents>
                    Sorry we couldn't find any upcoming events. Please stay
                    updated.
                  </NoEvents>
                ) : (
                  ""
                )}
                {events &&
                  events.map((event) => (
                    <SingleEvent key={event._id}>
                      <Card style={{ width: "21rem" }}>
                        <Card.Img
                          variant="top"
                          src={event.image ? event.image : Background}
                        />
                        <Card.Body>
                          <Card.Title>
                            {event.date &&
                              moment(event.date).format("DD-MMM-YYYY")}
                          </Card.Title>
                          <Card.Text>
                            {event.description &&
                              event.description.substring(0, 140)}
                            ....
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </SingleEvent>
                  ))}
              </>
            )}
          </EventBody>
        </EventSection>
      </Content>
    </News>
  );
};

export default NewsAndEvents;
