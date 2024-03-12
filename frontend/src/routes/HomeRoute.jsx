import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
const HomeRoute = (favPhotos, toggleFavourite, photoModal, toggleModalForSelectedPhoto, photoData, topicData, togglePhotosByTopic) => {

  return (
    <div className="home-route">
    <TopNavigation
        favPhotos={favPhotos}
        topicData={topicData}
        togglePhotosByTopic={togglePhotosByTopic}
      />
      <PhotoList
        favPhotos={favPhotos}
        toggleFavourite={toggleFavourite}
        photoModal={photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        photoData={photoData}
      />
    </div>
  );
};

export default HomeRoute;
