import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const { photoId, toggleFavourite, favourites=[] } = props;
  const [isClicked, setIsClicked] = useState(false);
    // Check if the photo is already favorited
    const isAlreadyFavorited = favourites.includes(photoId);

  const handleToggleFavourite = () => {
    toggleFavourite(photoId);
    setIsClicked(!isClicked);
  };
   // Dynamically set the class name based on the isClicked state
 const className = isClicked ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";
  return (
    <div>
      <div className={className} onClick={handleToggleFavourite}>
          <FavIcon isFavourite={isAlreadyFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;