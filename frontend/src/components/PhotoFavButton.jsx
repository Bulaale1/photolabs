import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
function PhotoFavButton(props) {

  return (
    <div>
    <div className="photo-list__fav-icon" onClick={props.toggleFavourite} >
      <div className="photo-list__fav-icon-svg">
      <FavIcon selectedImage={props.isFavourited} />
        
      </div>
    </div>
    </div>
  );
}

export default PhotoFavButton;