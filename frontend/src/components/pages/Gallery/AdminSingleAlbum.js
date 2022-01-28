import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../contents/Loader";
import Gallery from "react-grid-gallery";
import { gallerySingleAlbum } from "../../../actions/galleryActions";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Message from "../../contents/Message";

const AlbumSection = styled.div`
  padding: 20px 40px;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin-top: 18px;
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  text-align: center;
`;

const ImagesContainer = styled.div`
  padding: 10px 20px;
`;

const AdminSingleAlbum = ({ match }) => {
  const [imageCollection, setImageCollection] = useState([]);

  const dispatch = useDispatch();

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

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
      <LinkContainer to="/admin/albums/all">
        <Button className="btn-dark mt-3">Back</Button>
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Title darkmode={darkMode}>{albumImages && albumImages.name}</Title>
          <ImagesContainer>
            <Gallery
              images={imageCollection}
              margin={10}
              backdropClosesModal={true}
            />
          </ImagesContainer>
        </>
      )}
    </AlbumSection>
  );
};

export default AdminSingleAlbum;
