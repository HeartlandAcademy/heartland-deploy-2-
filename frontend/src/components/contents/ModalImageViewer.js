import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  margin-top: 50px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 15px 15px;
`;

const ModalImage = styled.img`
  height: 360px;
  width: 570px;
`;

const ModalImageViewer = ({ url }) => {
  return (
    <ModalContainer>
      <ModalImage src={url} alt="Modal Image" />
    </ModalContainer>
  );
};

export default ModalImageViewer;
