import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
const HomeRoute = (props) => {
    const { setDisplayModal,FavoritePhotos } = props; 
    // const handleImageClick = (imageDetails) => {
    //   console.log('Clicked image details:', imageDetails);
    // };
    // onImageClick={handleImageClick}
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} 
      FavoritePhotos={FavoritePhotos}/>
      <PhotoList photos={props.photos} 
      setDisplayModal={setDisplayModal}
      FavoritePhotos={FavoritePhotos}/>
    </div>
  );
};

export default HomeRoute;
