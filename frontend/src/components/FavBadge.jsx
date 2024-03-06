import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist,selectedImage }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selectedImage = {selectedImage}/>
    </div>
  ) 
};

export default FavBadge;