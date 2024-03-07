import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import FavIcon from 'components/FavIcon';
const PhotoDetailsModal = (props) => {
  const {closeModal,selectedImage,toggleFavourite, favourites=[]} = props;
  console.log(selectedImage)
  const shouldRenderFavIcon = selectedImage !== null;
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {shouldRenderFavIcon && (
          <div>
          <img src={selectedImage.urls.full} alt={`Photo ${selectedImage.id}`} className="photo-details-modal__selected-photo" />
          <FavIcon
            selected={favourites.includes(selectedImage.id)}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
          />
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-photos-list">
              {Object.values(selectedImage.similar_photos).map((photo) => (
                <img key={photo.id} src={photo.urls.regular} alt={`Similar Photo ${photo.id}`} className="photo-details-modal__similar-photo" />
              ))}
            </div>
          </div>
          </div>
          )}
      </div>
  );
};
export default PhotoDetailsModal;

