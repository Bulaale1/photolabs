import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
    <h2>HomeRoute</h2>
    <TopNavigation />
    <PhotoList />
    </div>
  );
};

export default HomeRoute;
