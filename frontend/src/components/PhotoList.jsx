import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  
  const { favPhotos, toggleFavourite, photoModal, toggleModalForSelectedPhoto, photoData =[] } = props

  return (
    <ul className="photo-list">
    {photoData.map((photoObject) => (
      <PhotoListItem
        key={photoObject.id}
        photoInfo={photoObject}
        isFavourited={favPhotos.includes(photoObject.id)}
        toggleFavourite={toggleFavourite}
        photoModal={photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
      />
    ))}
  </ul>)
    };

export default PhotoList;