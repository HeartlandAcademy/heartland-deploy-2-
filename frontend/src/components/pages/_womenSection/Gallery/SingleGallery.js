import { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Button, Placeholder, Container } from "react-bootstrap";

import { gallerySingleWAlbum } from "../../../../actions/galleryActions";
import CardLoader from "../../../contents/CardLoader";
import Message from "../../../contents/Message";
import { LinkContainer } from "react-router-bootstrap";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const AlbumSection = styled.div`
  padding: 20px 40px;
`;

const LoaderHeader = styled.h1`
  text-align: center;
  padding: 2px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
  margin: 48px 28px;
  font-size: 60px;
  text-align: center;
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
`;

const SingleAlbum = ({ match }) => {
  const dispatch = useDispatch();

  const singleWGalleryAlbum = useSelector((state) => state.singleWGalleryAlbum);
  const { loading, images: albumImages, error } = singleWGalleryAlbum;

  const albumId = match.params.id;

  useEffect(() => {
    dispatch(gallerySingleWAlbum(albumId));
  }, [dispatch, match, albumId]);

  return (
    <AlbumSection className="container">
      <LinkContainer to="/gallery">
        <Button className="btn-dark mt-3">Back</Button>
      </LinkContainer>
      {loading ? (
        <>
          <LoaderHeader>
            <Placeholder as={LoaderHeader} animation="wave">
              <Placeholder xs={4} />
            </Placeholder>
          </LoaderHeader>
          <Cards>
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </Cards>
        </>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Title>{albumImages && albumImages.name}</Title>

          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="img-grid"
          >
            {albumImages?.images?.map((image) => (
              <a
                href={image}
                style={{
                  height: "300px",
                }}
              >
                <img
                  alt="img1"
                  height={"100%"}
                  width={"100%"}
                  src={image}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </a>
            ))}
          </LightGallery>
        </>
      )}
    </AlbumSection>
  );
};

export default SingleAlbum;
