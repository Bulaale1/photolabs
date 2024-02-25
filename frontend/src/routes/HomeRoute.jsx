import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
// import photos from 'mocks/photos';


const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topic={props.topic} />
      <PhotoList photos={props.photoData} />
    </div>
  );
};

export default HomeRoute;
