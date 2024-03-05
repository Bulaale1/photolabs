import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
const HomeRoute = (props) => {
    const { setDisplayModal,FavoritePhotos,toggleFavourite, favourites} = props; 
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} 
      FavoritePhotos={FavoritePhotos}/>
      <PhotoList photos={props.photos} 
      setDisplayModal={setDisplayModal}
      FavoritePhotos={FavoritePhotos}
      toggleFavourite={toggleFavourite}
      favourites={favourites}/>
    </div>
  );
};

export default HomeRoute;
