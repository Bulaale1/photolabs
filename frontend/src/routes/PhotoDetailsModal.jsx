
import React from 'react';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/photoList.scss'
import '../styles/PhotoDetailsModal.scss';
const PhotoDetailsModal = (props) => {
  const similarPhotos = Object.keys(props.photoModal.similar_photos).map(photo => (
    <PhotoListItem
      key={props.photoModal.similar_photos[photo].id}
      photoInfo={props.photoModal.similar_photos[photo]}
      isFavourited={props.favPhotos.includes(props.photoModal.similar_photos[photo].id)}
      toggleFavourite={props.toggleFavourite}
      toggleModalForSelectedPhoto={props.toggleModalForSelectedPhoto}
    />
  ));
 return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="CloseSymbol" />
      </button>
      <div>
      {shouldRenderContent && (
        <div>
          <img src={selectedImage.urls.full} 
          alt={`Full version of Photo ${selectedImage.id}`}
           className="photo-details-modal__selected-photo" />
          <FavIcon
            selected={favourites.includes(selectedImage.id)}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
          />
          
          {/* Photographer Details */}
          <div className="photo-details-modal__photographer-details">
            <p>Photographer: {selectedImage.user.name}</p>
            <p>Location: {`${selectedImage.location.city}, ${selectedImage.location.country}`}</p>
          </div>
          
          {/* Similar Photos */}
          <div className='photo-details-modal__top-bar'>
          <ul className='photo-list photo-details-modal__images'>
          {similarPhotos}
        </ul>
      </div>
        </div>
      )}
      </div>
    </div>
 );
};

export default PhotoDetailsModal;
