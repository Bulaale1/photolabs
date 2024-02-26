import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { id, location,urls, user} = props.photo;
  const { setDisplayModal } = props;

  return (
    <div className="photo-list__item">
    <PhotoFavButton />
    <img src={urls.full} alt={`Photo ${id}`} className="photo-list__image"
    onClick={() => setDisplayModal(true)}
    />
      <div className="photo-list__user-details">
      
      <div className="photo-list__user-info">
      
      <img src={user.profile} className="photo-list__user-profile " alt={`${user.profile}'s profile picture`}/>
      <p>{user.name}</p>
      <p className="photo-list__user-location ">
        {location.city}, {location.country}
      </p>
      </div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
