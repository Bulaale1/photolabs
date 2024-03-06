import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const { photoId, toggleFavourite, favourites=[] } = props;
  const [isClicked, setIsClicked] = useState(false);
    // Check if the photo is already favorited
    const isAlreadyFavorited = favourites.includes(photoId);

  const handleToggleFavourite = () => {
  
    // Call the toggleFavourite function to update the global state
    // toggleFavourite(photoId, !isAlreadyFavorited);
    toggleFavourite(photoId);
    setIsClicked(!isClicked);
  };
   // Dynamically set the class name based on the isClicked state
 const className = isClicked ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";
//  <div className="photo-list__fav-icon-svg"> </div>
  return (
    <div>
      <div className={className} onClick={handleToggleFavourite}>
          <FavIcon selectedImage={isAlreadyFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;