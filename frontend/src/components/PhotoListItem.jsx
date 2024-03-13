import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
const PhotoListItem = (props) => {
  const { isFavourited, photoInfo, toggleFavourite, toggleModalForSelectedPhoto } = props

  // Function to open the modal for the selected photo
  const openModal = () => toggleModalForSelectedPhoto(photoInfo);
  return (
    // Container for a photo list item
    <div key={photoInfo.id} className="photo-list__item">
  
      <PhotoFavButton isFavourited={isFavourited} toggleFavourite={() => toggleFavourite(photoInfo.id)} />
      
      <img className="photo-list__image" src={photoInfo.urls.regular} onClick={openModal} />
     
      <div className="photo-list__user-details">
        
        <img className="photo-list__user-profile" src={photoInfo.user.profile} />
        <div className="photo-list__user-info">
          <h3>{photoInfo.user.name}</h3>
          <h3 className="photo-list__user-location">{`${photoInfo.location.city}, ${photoInfo.location.country}`}</h3>
        </div>
      </div>
    </div>
  );
};



export default PhotoListItem;