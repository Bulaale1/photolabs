import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
const PhotoDetailsModal = (props) => {
  const {closeModal} = props;
  const {selectedImage} = props;
  const {similarPhotos} = props;
  console.log(selectedImage);
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
  );
};

export default PhotoDetailsModal;