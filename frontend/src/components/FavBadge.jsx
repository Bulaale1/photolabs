import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favouritePhotosExist,selectedImage }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favouritePhotosExist} selectedImage = {selectedImage}/>
    </div>
  ) 
};

export default FavBadge;