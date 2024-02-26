import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
    // <PhotoList setDisplayModal={setDisplayModal} />
    const setDisplayModal = props;
  return (
    <div className="home-route">

      <TopNavigation topics={props.topics} />
    
      <PhotoList photos={props.photos} setDisplayModal={setDisplayModal}/>
    </div>
  );
};

export default HomeRoute;
