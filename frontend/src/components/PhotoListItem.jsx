import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {


  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list__item">
    <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image"/>
      <div className="photo-list__user-details">

      <div className="photo-list__user-info">
      <img src={profile} className="photo-list__user-profile " alt={`${username}'s profile picture`}/>
      <p>{username}</p>
      <p className="photo-list__user-location ">
        {location.city}, {location.country}
      </p>
      </div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
