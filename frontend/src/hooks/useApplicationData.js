import { useState } from 'react';

const useApplicationData = () => {
 // Group state variables into a single state object
 const [state, setState] = useState({
    displayModal: false,
    selectedImage: null,
    favorites: [],
 });

 const toggleFavourite = (photoId, isFavorite) => {
    setState(prevState => {
      const newFavorites = isFavorite
        ? prevState.favorites.filter(id => id !== photoId)
        : [...prevState.favorites, photoId];

      return { ...prevState, favorites: newFavorites };
    });
 };

 const setDisplayModal = (display) => {
    setState(prevState => ({ ...prevState, displayModal: display }));
 };

 const setSelectedImage = (image) => {
    setState(prevState => ({ ...prevState, selectedImage: image }));
 };
 return {
  state,
  toggleFavourite,
  setDisplayModal,
  setSelectedImage
};
};

export default useApplicationData;
