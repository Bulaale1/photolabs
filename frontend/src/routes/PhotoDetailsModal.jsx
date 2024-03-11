
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import FavIcon from 'components/FavIcon';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
const PhotoDetailsModal = (props) => {
 const { closeModal, selectedImage, toggleFavourite, favourites = [] } = props;

 // Check if selectedImage is not null before rendering content
 const shouldRenderContent = selectedImage !== null;

 return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
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
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <PhotoList 
            photos={Object.values(selectedImage.similar_photos)} 
            favourites={favourites} and toggleFavourite={toggleFavourite} 
            />
          </div>
        </div>
      )}
      </div>
    </div>
 );
};

export default PhotoDetailsModal;
