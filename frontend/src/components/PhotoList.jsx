import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const PhotoList = (props) => {
  const { setDisplayModal } = props;
  const photData = props.photos;
  return (
    <ul className="photo-list">
    {photData.map((photo) => (
      <PhotoListItem key={photo.id} photo = {photo} setDisplayModal={setDisplayModal} />
    ))}

    </ul>
  );
};

export default PhotoList;
