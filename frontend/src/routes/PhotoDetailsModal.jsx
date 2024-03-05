import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
const PhotoDetailsModal = (props) => {
  const {closeModal} = props;
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        
      </div>
  );
};
export default PhotoDetailsModal;