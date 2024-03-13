
import React from 'react';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss';
const PhotoDetailsModal = (props) => {
  const closeModal = ()=> props.toggleModalForSelectedPhoto();
  //iterate over similar photos
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
      
      <PhotoFavButton
        isFavourited={props.favPhotos.includes(props.photoModal.id)}
        toggleFavourite={() => props.toggleFavourite(props.photoModal.id)}
      />
      <img className='photo-details-modal__image' src={props.photoModal.urls.full} />
      <div className='photo-details-modal__photographer-details'>
        <img className='photo-details-modal__photographer-profile' src={props.photoModal.user.profile} />
        <div className='photo-details-modal__photographer-info'>
          <p>{props.photoModal.user.name}</p>
          <p className='photo-details-modal__photographer-location'>
            {`${props.photoModal.location.city}, ${props.photoModal.location.country}`}
          </p>
        </div>
      </div>
      <header className='photo-details-modal__header'>Similar Photos</header>
    
          {/* display Similar Photos */}
          <div className='photo-details-modal__top-bar'>
          <ul className='photo-list photo-details-modal__images'>
          {similarPhotos}
        </ul>
      </div>
       
    </div>
 );
};

export default PhotoDetailsModal;
