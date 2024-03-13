import { useReducer, useEffect } from "react";
const useApplicationData = () => {
  const initialState = {
    favPhotos: [],
    photoModal: null,
    photoData: [],
    topicData: [],
    topicId: null,
  };

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

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, 
          favPhotos: [action.payload, ...state.favPhotos] };
      case ACTIONS.FAV_PHOTO_REMOVED:
        return { ...state, favPhotos: state.favPhotos.filter(item => action.payload !== item) };
      case ACTIONS.SELECT_PHOTO:
        return {...state,photoModal: action.payload,
        };
      case ACTIONS.CLOSE_SELECT_PHOTO:
        return { ...state, photoModal: action.payload };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      case ACTIONS.GET_PHOTOS_BY_TOPIC:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_ID:
        return { ...state, photoData: [], topicId: action.payload };
      case ACTIONS.REMOVE_TOPIC_ID:
        return { ...state, photoData: [], topicId: action.payload };
      default:
        throw new Error(`${action.type} is not a recognized action.`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const savedFavPhotos = localStorage.getItem('favPhotos');
    return savedFavPhotos ? { ...initial, favPhotos: JSON.parse(savedFavPhotos) } : initial;
  });
//make a GET request to /api/photos
  useEffect(() => {
    if (state.topicId === null) {
      fetch('http://localhost:8001/api/photos')
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
        .catch(error => console.log('Error', error));
    }
  }, [state.topicId]);

  //make a GET request to /api/topics
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => console.log('Error', error));
  }, []);

  useEffect(() => {
    if (state.topicId) {
      fetchPhotosByTopic(state.topicId);
    }
  }, [state.topicId]);

  useEffect(() => {
    const savedFavPhotos = JSON.stringify(state.favPhotos);
    localStorage.setItem('favPhotos', savedFavPhotos);
  }, [state.favPhotos]);

//Make a request to the backend to fetch photos for the specific topic clicked
  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data }))
      .catch(error => console.log('Error', error));
  };
  //Toggles the favorite status of a photo based on its current state. If the photo is already favorited,
  // it removes it from favorites; otherwise, it adds it to favorites

  const toggleFavourite = (photoId) => {
    const isFavourited = state.favPhotos.includes(photoId);

    dispatch({
      type: isFavourited ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: photoId,
    });
  };
//Opens or closes a modal for displaying details of a selected photo based on whether a photo is provided
  const toggleModalForSelectedPhoto = (photo) => {
    dispatch({ type: photo ? ACTIONS.SELECT_PHOTO : ACTIONS.CLOSE_SELECT_PHOTO, payload: photo });
  };

//Sets or removes a topic filter for fetching photos based on whether a topic is provided
  const togglePhotosByTopic = (topic) => {
    dispatch({ type: topic ? ACTIONS.SET_TOPIC_ID : ACTIONS.REMOVE_TOPIC_ID, payload: topic });
  };

  return { state, toggleFavourite, toggleModalForSelectedPhoto, togglePhotosByTopic };
  
};

export default useApplicationData;
