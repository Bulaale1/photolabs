import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const PhotoList = (props) => {
  const { setDisplayModal,toggleFavourite, favourites } = props;
  const photData = props.photos;

  //isFavourite={favourites.includes(photo.id)}
    
  return (
    <ul className="photo-list">
    {photData.map((photo) => (
      <PhotoListItem 
      key={photo.id} 

      photo = {photo} 
      
      setDisplayModal={setDisplayModal}

      toggleFavourite={toggleFavourite}

      isFavourite={favourites}
      />      
    ))}
    </ul>
  );
};
export default PhotoList;