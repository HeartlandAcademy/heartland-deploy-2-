import React, { useEffect } from "react";
import styled from "styled-components";

import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listLatestNews, listNewsDetails } from "../../../actions/newsActions";
import Loader from "../../contents/Loader";
import Message from "../../contents/Message";

import Newspaper from "../../../assets/others/newspaper.jpg";
import ImageHeader from "../../contents/ImageHeader";
import { Link } from "react-router-dom";
import Meta from "../../contents/Meta";

const Title = styled.h2`
  margin-bottom: 28px;
  font-size: 50px;
  font-weight: 700;
  color: #012237;
  @media (max-width: 510px) {
    font-size: 30px;
    font-weight: 500;
  }
`;

const Section1 = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  margin-bottom: 80px;
`;

const News = styled.div`
  margin-top: 30px;
`;

const ImageContainer = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    max-height: 80%;
  }
`;

const NewsInfo = styled.div`
  padding: 0px 50px;
  h4 {
    font-size: 20px;
    color: blue;
  }
  h5 {
    padding-top: 10px;
    float: right;
    color: red;
  }
`;

const NewsDetails = styled.p`
  color: #111;
  line-height: 30px;
  text-align: justify;
  font-size: 20px;
  @media (max-width: 510px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

// const LastSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 40px 0px;
//   font-size: 30px;
//   @media (max-width: 664px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     font-size: 20px;
//   }
// `;

const Latest = styled.div`
  padding: 30px 30px;
  h4 {
    margin-bottom: 25px;
    color: #012237;
    margin-top: 30px;
  }
`;

const LatestPostCard = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const LatestPostImage = styled.div`
  img {
    height: 80px;
    width: 80px;
  }
`;

const LatestPostTitle = styled.div`
  h4 {
    color: #012237;
    font-size: 18px;
    margin-top: 2px;
    cursor: pointer;
  }
`;

// const Section = styled.div`
//   margin-top: 150px;
//   i {
//     float: right;
//   }
// `;

const DetailedNews = ({ match }) => {
  const dispatch = useDispatch();

  const newsDetails = useSelector((state) => state.newsDetails);
  const { loading, singleNews: news, error } = newsDetails;

  const latestNews = useSelector((state) => state.latestNews);
  const { loading: latestLoading, newsLatest, error: latestError } = latestNews;

  useEffect(() => {
    dispatch(listNewsDetails(match.params.id));
    dispatch(listLatestNews());
  }, [dispatch, match]);

  return (
    <>
      <ImageHeader mtitle="News" title="News Details" image={Newspaper} />
      <Link to="/news">
        <Button className="btn btn-primary mt-4 ml-5">
          <i className="fas fa-caret-left"></i> Back
        </Button>
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Section1>
          <News>
            <Meta title={`News | ${news.title}`} />
            <ImageContainer>
              {news.image && <img src={news.image} alt="sdfsdf" />}
            </ImageContainer>
            <Title>{news.title}</Title>
            <NewsInfo>
              <h4>16th Auguest</h4>
              <NewsDetails>{news.description}</NewsDetails>
              <h5>{news.author}</h5>
            </NewsInfo>
          </News>
          <Latest>
            {/* <InputGroup className="mb-3">
              <FormControl
                placeholder="Search here..."
                aria-label="Search here..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup> */}

            <h4>Latest Post</h4>
            {latestLoading ? (
              <Loader />
            ) : latestError ? (
              <Message variant="danger">{latestError}</Message>
            ) : (
              <>
                {newsLatest &&
                  newsLatest.map((news) => (
                    <LatestPostCard>
                      <LatestPostImage>
                        {news.image ? (
                          <img src={news.image} alt="Latest" />
                        ) : (
                          <img src={Newspaper} alt="Latest" />
                        )}
                      </LatestPostImage>
                      <LinkContainer to={`/news/${news._id}`}>
                        <LatestPostTitle>
                          <h4>{news.title}</h4>
                        </LatestPostTitle>
                      </LinkContainer>
                    </LatestPostCard>
                  ))}
              </>
            )}
            {/* <Section>
              <h4>Section</h4>
              <ListGroup style={{ cursor: "pointer" }}>
                <ListGroup.Item>
                  Preschool
                  <i className="fas fa-chevron-right" />
                </ListGroup.Item>
                <ListGroup.Item>
                  Primary
                  <i className="fas fa-chevron-right" />
                </ListGroup.Item>
                <ListGroup.Item>
                  Lower Secondary
                  <i className="fas fa-chevron-right" />
                </ListGroup.Item>
                <ListGroup.Item>
                  Junior Higher Secondary
                  <i className="fas fa-chevron-right" />
                </ListGroup.Item>
                <ListGroup.Item>
                  Senior Higher Secondary
                  <i className="fas fa-chevron-right" />
                </ListGroup.Item>
              </ListGroup>
              
            </Section> */}
          </Latest>
        </Section1>
      )}
    </>
  );
};

export default DetailedNews;
