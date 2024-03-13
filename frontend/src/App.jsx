import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  const {
    state, 
    toggleFavourite,
    toggleModalForSelectedPhoto, 
    togglePhotosByTopic
  } = useApplicationData();
  return (
    <div className="App">
    <HomeRoute 
        favPhotos={state.favPhotos}
        toggleFavourite={toggleFavourite}
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        photoData={state.photoData}
        topicData={state.topicData}
        togglePhotosByTopic={togglePhotosByTopic}
      />
      {state.photoModal && <PhotoDetailsModal
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        toggleFavourite={toggleFavourite}
        favPhotos={state.favPhotos}
      />}
     
    </div>
  );
};

export default App;
