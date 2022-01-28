import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "react-grid-gallery";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Loader from "../../contents/Loader";
import Message from "../../contents/Message";
import { gallerySingleAlbum } from "../../../actions/galleryActions";

const AlbumSection = styled.div`
  padding: 20px 40px;
`;

const Title = styled.h2`
  margin: 28px;
  font-size: 60px;
  text-align: center;
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
`;

const ImagesContainer = styled.div`
  padding: 10px 20px;
  min-height: 100vh;
`;

const SingleAlbum = ({ match }) => {
  const [imageCollection, setImageCollection] = useState([]);

  const dispatch = useDispatch();

  const singleGalleryAlbum = useSelector((state) => state.singleGalleryAlbum);
  const { loading, images: albumImages, error } = singleGalleryAlbum;

  const albumId = match.params.id;

  useEffect(() => {
    dispatch(gallerySingleAlbum(albumId));
  }, [dispatch, match, albumId]);

  useEffect(() => {
    if (albumImages && albumImages.images) {
      let data = [];
      albumImages.images.forEach((img, index) => {
        data[index] = {
          src: img,
          thumbnail: img,
          thumbnailWidth: 320,
          thumbnailHeight: 174,
        };
      });
      setImageCollection(data);
    }
  }, [albumImages]);
  return (
    <AlbumSection>
      <LinkContainer to="/gallery/albums">
        <Button className="btn-dark mt-3">Back</Button>
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Title>{albumImages && albumImages.name}</Title>
          <ImagesContainer>
            <Gallery images={imageCollection} backdropClosesModal={true} />
          </ImagesContainer>
        </>
      )}
    </AlbumSection>
  );
};

export default SingleAlbum;
