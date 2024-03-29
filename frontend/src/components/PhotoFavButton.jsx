import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss'

const PhotoFavButton = (props) => {

 const { toggleFavourite, isFavourited } = props;
 return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavourited={isFavourited} 
          selected={isFavourited} />
      </div>
    </div>
 );
};

export default PhotoFavButton;