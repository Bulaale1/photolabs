import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {

    setIsClicked(!isClicked);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleIconClick}>
        {FavIcon}
      </div>
    </div>
  );
}

export default PhotoFavButton;