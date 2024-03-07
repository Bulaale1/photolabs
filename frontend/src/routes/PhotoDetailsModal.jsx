import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
// import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';
import FavIcon from 'components/FavIcon';
const PhotoDetailsModal = (props) => {
  const {closeModal,selectedImage,toggleFavourite, favourites} = props;
  console.log(selectedImage)
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <FavIcon selected={selectedImage} 
        toggleFavourite={toggleFavourite}
        favourites={favourites}/>
      </div>
  );
};
export default PhotoDetailsModal;