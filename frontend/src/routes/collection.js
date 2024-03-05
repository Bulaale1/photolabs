

// PhotoDetailsModal
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


/* photolist*/
// const PhotoList = ({ selectedPhoto, similarPhotos }) => {
//   return (
//     <div>
//       <img src={selectedPhoto.urls} alt={selectedPhoto.id}/>
//       {similarPhotos && Object.values(similarPhotos).map(photo => (
//         <img key={photo.id} src={photo.urls.full} alt={photo.id} />
//       ))}
//     </div>
//   );
// };
import React, { createContext, useState } from 'react';

// Create a context
const FavouritePhotosContext = createContext();

// Provider component
export const FavouritePhotosProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    // Functions to manipulate favourites can go here
    const addFavourite = (photo) => {
        setFavourites((prevFavourites) => [...prevFavourites, photo]);
    };

    const removeFavourite = (photoId) => {
        setFavourites((prevFavourites) =>
            prevFavourites.filter(photo => photo.id !== photoId)
        );
    };

    return (
        <FavouritePhotosContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritePhotosContext.Provider>
    )
};

export default FavouritePhotosContext;