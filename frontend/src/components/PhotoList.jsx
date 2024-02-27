import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const PhotoList = (props) => {
  const { setDisplayModal } = props;
  const photData = props.photos;
  // const similarPhotos = ()=>{

  // }
  return (
    <ul className="photo-list">
    {photData.map((photo) => (
      <PhotoListItem key={photo.id} photo = {photo} setDisplayModal={setDisplayModal}
       openModal={() => openModal(photo)}/>
      
    ))}

    </ul>
  );
};

export default PhotoList;
