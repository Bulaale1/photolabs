import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
const PhotoDetailsModal = (props) => {
  const {closeModal} = props;
  const {selectedPhotoId} = props.id;
  // const {similarPhotos} = props;
  // <PhotoList photos={similarPhotos} />
  //to be commented later
  const selectedPhoto = photos.find(photo => photo.id === selectedPhotoId);
 
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
          <img src={selectedImage} alt="Selected" />
        <PhotoList selectedPhoto={selectedPhoto} similarPhotos={selectedPhoto.similar_photos} />
      </div>
  );
};
// const PhotoDetailsModal = ({ selectedPhotoId }) => {
//   // Find the selected photo based on the selectedPhotoId
//   const selectedPhoto = photos.find(photo => photo.id === selectedPhotoId);

//   return (
//     <div>
//       {/* Your other modal content here */}
//       <PhotoList selectedPhoto={selectedPhoto} similarPhotos={selectedPhoto?.similar_photos} />
//     </div>
//   );
// };

export default PhotoDetailsModal;