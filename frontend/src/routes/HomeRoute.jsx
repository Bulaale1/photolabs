import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
const HomeRoute = (props) => {
    const { setDisplayModal,FavoritePhotos,toggleFavourite, favourites} = props; 
    //FavoritePhotos={FavoritePhotos}
  return (
    <div className="home-route">
    <TopNavigation topics={props.topics} FavoritePhotos={favourites}/>
      <PhotoList photos={props.photos} 
      setDisplayModal={setDisplayModal}
      toggleFavourite={toggleFavourite}
      favourites={favourites}/>
    </div>
  );
};

export default HomeRoute;
