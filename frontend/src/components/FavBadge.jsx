import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { favouritePhotosExist,selected } = props;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favouritePhotosExist} selected = {selected}/>
    </div>
  ) 
};

export default FavBadge;