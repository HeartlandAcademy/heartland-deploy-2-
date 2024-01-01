import { useEffect } from "react";
import styled from "styled-components";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import { listWGalleryAlbums } from "../../../../actions/galleryActions";
import GalleryCardLoader from "../../../contents/GalleryCardLoader";
import placeholder from "../../../../assets/default/placeholder.png";
import Message from "../../../contents/Message";
import Meta from "../../../contents/Meta";
import AltImageHeader from "../../../contents/AltImageHeader";

const AlbumsSection = styled.div`
  margin: 50px 10px;
`;

const NoAlbums = styled.div`
  font-size: 40px;
  margin: 150px 0px;
  text-align: center;
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
  background-color: ${(props) => (props.darkmode ? "#202124" : "#fff")};
  border-radius: 0.25rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardImage = styled.div`
  height: 270px;
  width: 400px;
  @media (max-width: 484px) {
    height: 200px;
    width: 300px;
  }
  img {
    /* height: auto;
    max-width: 100%;
    vertical-align: middle; */
    object-fit: cover;
    object-position: top;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardInfo = styled.p`
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  font-weight: 300;
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
`;

const CardTitle = styled.div`
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-family: "Urbanist", sans-serif;
  margin: 0px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const ActionButton = styled.div`
  margin-top: 20px;
  text-align: center;
  button {
    border-radius: 30px;
    border: none;
    background: #111;
    &:hover {
      background: #202124;
    }
  }
`;

const WomenGallery = () => {
  const dispatch = useDispatch();

  const galleryWAlbums = useSelector((state) => state.galleryWAlbums);
  const { loading, wAlbums: albums, error } = galleryWAlbums;

  useEffect(() => {
    dispatch(listWGalleryAlbums());
  }, [dispatch]);

  return (
    <>
      <Meta title="Heartland Gallery | Albums" />
      <AltImageHeader mainTitle={"Gallery"} title={"Gallery"} />
      <Container>
        <AlbumsSection>
          {loading ? (
            <Cards>
              <GalleryCardLoader
                style={{
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              />
              <GalleryCardLoader
                style={{
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              />
              <GalleryCardLoader
                style={{
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              />
            </Cards>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              {albums && albums.length === 0 ? (
                <NoAlbums>Sorry we couldn't find any albums.</NoAlbums>
              ) : (
                ""
              )}
              <Cards>
                {albums &&
                  albums.map((album) => (
                    <CardItem key={album._id}>
                      <Card
                        style={{
                          boxShadow:
                            "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                        }}
                      >
                        <CardImage>
                          <img
                            src={album.images[0]}
                            alt="album"
                            onError={(e) => {
                              e.target.src = placeholder; //replacement image imported above
                            }}
                          />
                        </CardImage>
                        <CardContent>
                          <LinkContainer to={`/gallery/albums/${albums._id}`}>
                            <CardTitle>{album.name}</CardTitle>
                          </LinkContainer>
                          <CardInfo>
                            {album.createdAt &&
                              moment(album.createdAt).format("DD-MMM-YYYY")}
                          </CardInfo>
                          <ActionButton>
                            <Link to={`/gallery/${album._id}`}>
                              <Button size="lg" className="bg-success">
                                View
                              </Button>
                            </Link>
                          </ActionButton>
                        </CardContent>
                      </Card>
                    </CardItem>
                  ))}
              </Cards>
            </>
          )}
        </AlbumsSection>
      </Container>
    </>
  );
};

export default WomenGallery;
