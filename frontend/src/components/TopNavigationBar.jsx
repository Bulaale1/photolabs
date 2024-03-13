import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { favPhotos, topicData, togglePhotosByTopic } = props;
  // Flag to indicate if an item is selected 
  const selected = true;

  return (
    // Top navigation bar 
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => togglePhotosByTopic(null)}>
        PhotoLabs
      </span>
      <TopicList topicData={topicData} togglePhotosByTopic={togglePhotosByTopic} />

      <FavBadge favouritePhotosExist={favPhotos.length > 0} selected={selected} />
    </div>
  );
};
export default TopNavigation;