import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  const { id, location, imageSource, username, profile } = props.data;

  // return (
  //   <div className="photo-list__item">

  //   <img src={imageSource} alt={`Photo ${id}`} />

  //   <p>{`${username}`}</p>

  //   <img src={profile} alt={`${username}'s profile`} />

  //   <p>{location.city},{location.country}</p>
      
  //   </div>
  // );
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image"/>
      
      <div className="photo-list__user-details">

      <div className="photo-list__user-info">
        <p>{username}</p>
        <img src={profile}    className="photo-list__user-profile "/>
      </div>
       
      </div>
      <p className="photo-list__user-location ">
      {location.city}, {location.country}
      </p>
      
    </div>
  );
};

export default PhotoListItem;
