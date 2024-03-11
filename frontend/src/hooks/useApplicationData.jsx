import { useState } from 'react';

const useApplicationData = () => {
 const [displayModal, setDisplayModal] = useState(false);
 const [selectedImage, setSelectedImage] = useState(null);
 const [favorites, setFavorites] = useState([]);

 const toggleFavourite = (photoId, isFavorite) => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
 };

 return {
    state,
    displayModal,
    setDisplayModal,
    selectedImage,
    setSelectedImage,
    favorites,
    toggleFavourite,
 };
};

export default useApplicationData;