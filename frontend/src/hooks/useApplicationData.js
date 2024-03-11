import { useReducer, useEffect } from "react";
const useApplicationData = () => {
  
// initial state
const initialState = {
  favPhotos: [],
  photoModal: null,
  photoData: [],
  topicData: [],
  topicId: null,
 };
 
 // action types
  const ACTIONS = {
   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
   SELECT_PHOTO: 'SELECT_PHOTO',
   CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
   GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
   SET_TOPIC_ID: 'SET_TOPIC_ID',
   REMOVE_TOPIC_ID: 'REMOVE_TOPIC_ID',
  };
 
 // reducer function
 const reducer = (state, action) => {
  switch (action.type) {
     case ACTIONS.FAV_PHOTO_ADDED:
       return {
         ...state,
         favPhotos: [...state.favPhotos, action.payload],
       };
     case ACTIONS.FAV_PHOTO_REMOVED:
       return {
         ...state,
         favPhotos: state.favPhotos.filter(photo => photo.id !== action.payload.id),
       };
     case ACTIONS.SELECT_PHOTO:
       return {
         ...state,
         photoModal: action.payload,
       };
     case ACTIONS.CLOSE_SELECT_PHOTO:
       return {
         ...state,
         photoModal: null,
       };
     case ACTIONS.SET_PHOTO_DATA:
       return {
         ...state,
         photoData: action.payload,
       };
     case ACTIONS.SET_TOPIC_DATA:
       return {
         ...state,
         topicData: action.payload,
       };
     case ACTIONS.SET_TOPIC_ID:
       return {
         ...state,
         topicId: action.payload,
       };
     case ACTIONS.REMOVE_TOPIC_ID:
       return {
         ...state,
         topicId: null,
       };
     default:
       return state;
  }
 };
 const [state, dispatch] = useReducer(reducer, initialState);
 useEffect(() => {
  if (state.topicId === null) {
    fetch('/api/photos')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: data,
        });
      })
      .catch((error) => console.log('Error fetching photos:', error));
  }
}, [state.topicId]);

useEffect(() => {
  fetch('/api/topics')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      dispatch({
        type: ACTIONS.SET_TOPIC_DATA,
        payload: data,
      });
    })
    .catch((error) => console.log('Error fetching topics:', error));
}, []);
const fetchPhotosByTopic = (topicId) => {
  fetch(`/api/topics/photos/${topicId}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: ACTIONS.GET_PHOTOS_BY_TOPIC,
        payload: data
      });
    })
    .catch(error => console.log('Error', error));
};
 const toggleFavourite = (photoId, isFavorite) => {
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
 };

 const setDisplayModal = (display) => {
    dispatch({ type: display ? ACTIONS.SELECT_PHOTO : ACTIONS.CLOSE_SELECT_PHOTO, payload: display });
 };

 const setSelectedImage = (image) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: image });
 };

 return {
    state,
    toggleFavourite,
    setDisplayModal,
    setSelectedImage,
 };
};

export default useApplicationData;