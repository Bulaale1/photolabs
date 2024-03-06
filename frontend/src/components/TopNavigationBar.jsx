import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
const TopNavigation = (props) => {
  const {topics, favouritePhotosExist}= props
  // const {topics,favPhotos}= props.topics;
  //set selectedImage initially  to false
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs </span>
      <TopicList topics = {topics} />
      <FavBadge isFavPhotoExist={favouritePhotosExist} />
    </div>
  )
}

export default TopNavigation;