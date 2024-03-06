import React from 'react';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
 const { photoId, toggleFavourite, favourites = [] } = props;
 // Check if the photo is already favorited
 const isAlreadyFavorited = favourites.includes(photoId);

 const handleToggleFavourite = () => {
    toggleFavourite(photoId);
 };

 // Dynamically set the class name based on the isAlreadyFavorited variable
 const className = isAlreadyFavorited ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";

 return (
    <div>
      <div className={className} onClick={handleToggleFavourite}>
        <FavIcon isFavourite={isAlreadyFavorited} />
      </div>
    </div>
 );
}

export default PhotoFavButton;