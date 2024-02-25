import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
// import photos from 'mocks/photos';


const HomeRoute = () => {
  return (
    <div className="home-route">
    <TopNavigation topic= {topic}/>
    <PhotoList photos = {photos}/>
    </div>
  );
};

export default HomeRoute;
