import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const { photoId, toggleFavourite, favourites } = props;

  const handleToggleFavourite = () => {
    // Check if the photo is already favorited
    const isAlreadyFavorited = favourites.includes(photoId);

    // Call the toggleFavourite function to update the global state
    toggleFavourite(photoId, !isAlreadyFavorited);
  };

  return (
    <div>
      <div className="photo-list__fav-icon" onClick={handleToggleFavourite}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon selectedImage={isAlreadyFavorited} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;