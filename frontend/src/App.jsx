import React,{useState} from 'react';


import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import  photos from '../src/mocks/photos';
import  topics from '../src/mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
const App = () => {
  const {
    state,
    toggleFavourite,
    setDisplayModal,
    setSelectedImage
  } = useApplicationData();
  return (
    <div className="App">
    <HomeRoute 
    photos={photos} 
    topics={topics} 
    setDisplayModal={setDisplayModal} 
    toggleFavourite={toggleFavourite}
    setSelectedImage={setSelectedImage}/>
    {displayModal && <PhotoDetailsModal  closeModal={() => setDisplayModal(false)}
    selectedImage={selectedImage} />}
     
    </div>
  );
};

export default App;
