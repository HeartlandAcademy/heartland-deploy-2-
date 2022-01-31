import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Placeholder } from "react-bootstrap";

import newspaper from "../../../assets/others/newspaper.jpg";
import BlogPicture from "../../../assets/others/blogpicture.jpg";
import ImageHeader from "../../contents/ImageHeader";
import { listNews } from "../../../actions/newsActions";
import Message from "../../contents/Message";
import Meta from "../../contents/Meta";
import { Pagination } from "../../contents/Pagination";
import defaultImage from "../../../assets/default/default-loading.png";
import "./index.css";

const Title = styled.h2`
  font-weight: 700;
  color: rgb(1, 34, 55);
  position: relative;
  font-size: 50px;
  text-align: center;
  margin: 17px;
`;

const Section2 = styled.div`
  margin: 30px 30px;
`;

const SearchBox = styled.div`
  text-align: right;
  input {
    padding: 10px 20px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardItem = styled.div`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.333%;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardImage = styled.div`
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #111;
    font-style: italic;
    font-weight: 600;
  }
`;

const CardTitle = styled.div`
  color: #111;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const NoNews = styled.p`
  font-size: 23px;
  text-align: center;
  padding: 60px 0px 100px 0px;
`;

const CardText = styled.div`
  color: #111;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 500;
  text-align: justify;
  padding-top: 10px;
`;

const News = ({ match }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.newsList);
  const { loading, news, error } = newsList;

  useEffect(() => {
    dispatch(listNews());
  }, [dispatch]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredNews = news.filter((n) => {
        return Object.values(n)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredNews);
    } else {
      setFilteredResults(news);
    }
  };

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const NewsCardLoader = () => {
    return (
      <CardItem>
        <Card>
          <CardImage>
            <img src={defaultImage} alt="default" />
          </CardImage>
          <CardContent>
            <CardInfo>
              <p>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={2} />
                </Placeholder>
              </p>
              <p>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={2} />
                </Placeholder>
              </p>
            </CardInfo>

            <CardTitle>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </CardTitle>

            <CardText>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={9} />
              </Placeholder>
            </CardText>

            <Placeholder.Button variant="primary" xs={5} />
          </CardContent>
        </Card>
      </CardItem>
    );
  };

  return (
    <>
      <Meta title="Heartland News" />
      <ImageHeader mtitle="News" title="News" image={newspaper} />
      <Title>Heartland News</Title>
      <SearchBox className="container">
        <input
          type="text"
          placeholder="Search news . . . . ."
          onChange={(e) => searchItems(e.target.value)}
        />
      </SearchBox>

      {loading ? (
        <Cards>
          <NewsCardLoader />
          <NewsCardLoader />
          <NewsCardLoader />
        </Cards>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Section2>
          {news && news.length === 0 ? (
            <NoNews>
              Sorry we couldn't find any latest News. Please stay updated.
            </NoNews>
          ) : (
            ""
          )}
          <Cards>
            {searchInput.length > 1
              ? filteredResults.map((n) => (
                  <CardItem key={n._id}>
                    <Card>
                      <CardImage>
                        {n.image ? (
                          <img src={n.image} alt="sdf" />
                        ) : (
                          <img src={BlogPicture} alt="sdf" />
                        )}
                      </CardImage>
                      <CardContent>
                        <CardInfo>
                          <p>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            {n.createdAt && n.createdAt.substring(0, 10)}
                          </p>
                          <p>
                            <i className="far fa-user"></i> {n.author}
                          </p>
                        </CardInfo>
                        <LinkContainer to={`/news/${news._id}`}>
                          <CardTitle>{n.title}</CardTitle>
                        </LinkContainer>
                        <CardText>
                          {n.description && n.description.substring(0, 299)}
                          .......
                        </CardText>
                        <LinkContainer to={`/news/${n._id}`}>
                          <button className="btn btn-warning">Read More</button>
                        </LinkContainer>
                      </CardContent>
                    </Card>
                  </CardItem>
                ))
              : news &&
                currentNews.map((n) => (
                  <CardItem key={n._id}>
                    <Card>
                      <CardImage>
                        {n.image ? (
                          <img src={n.image} alt="sdf" />
                        ) : (
                          <img src={BlogPicture} alt="sdf" />
                        )}
                      </CardImage>
                      <CardContent>
                        <CardInfo>
                          <p>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            {n.createdAt && n.createdAt.substring(0, 10)}
                          </p>
                          <p>
                            <i className="far fa-user"></i> {n.author}
                          </p>
                        </CardInfo>
                        <LinkContainer to={`/news/${news._id}`}>
                          <CardTitle>{n.title}</CardTitle>
                        </LinkContainer>
                        <CardText>
                          {n.description && n.description.substring(0, 299)}
                          .......
                        </CardText>
                        <LinkContainer to={`/news/${n._id}`}>
                          <button className="btn btn-warning">Read More</button>
                        </LinkContainer>
                      </CardContent>
                    </Card>
                  </CardItem>
                ))}
          </Cards>
          <Pagination
            itemsPerPage={newsPerPage}
            total={news.length}
            paginate={paginate}
          />
        </Section2>
      )}
    </>
  );
};

export default News;
