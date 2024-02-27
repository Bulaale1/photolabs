import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// const PhotoList = (props) => {
//   const { setDisplayModal } = props;
//   const photData = props.photos;
//   const {selectedPhoto }= props;
//   const {similarPhotos} = props;
//   return (
//     <ul className="photo-list">
//     {photData.map((photo) => (

//       <PhotoListItem key={photo.id} photo = {photo} setDisplayModal={setDisplayModal}/>
      
//     ))}
//     </ul>
//   );
// };
const PhotoList = ({ selectedPhoto, similarPhotos }) => {
  return (
    <div>
      <img src={selectedPhoto.urls} alt={selectedPhoto.id}/>
      {similarPhotos && Object.values(similarPhotos).map(photo => (
        <img key={photo.id} src={photo.urls.full} alt={photo.id} />
      ))}
    </div>
  );
};

export default PhotoList;

// export default PhotoList;
