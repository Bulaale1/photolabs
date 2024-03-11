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
    displayModal: state.displayModal,
    setDisplayModal,
    selectedImage: state.selectedImage,
    setSelectedImage,
    favorites: state.favorites,
    toggleFavourite,
 };
};

export default useApplicationData;
