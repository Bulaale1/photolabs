import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
// function PhotoFavButton(props) {

//   return (
//     <div className="photo-list__fav-icon" onClick={props.toggleFavourite}>
//       <div className="photo-list__fav-icon-svg">
//         <FavIcon selected={props.isFavourited}/>
//       </div>
//     </div>
//   );
// }

// export default PhotoFavButton;

function PhotoFavButton(props) {

  const [isClicked, setIsClicked] = useState(false);
  
  const handleIconClick = () => {
    
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
    <div className={`photo-list__fav-icon ${isClicked ? 'photo-list__fav-icon-svg' : ''}`}>
      <div className="photo-list__fav-icon-svg" onClick={handleIconClick}>
      <FavIcon isClicked={isClicked} />
        
      </div>
    </div>
    </div>
  );
}

export default PhotoFavButton;