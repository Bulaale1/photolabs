import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
const TopNavigation = (props) => {
  const {topics, favorites = [] }= props
  favoritePhotosExist = favorites.length > 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs </span>
      <TopicList topics = {topics} />
      {favoritePhotosExist && <FavBadge isFavPhotoExist={favouritePhotosExist} />}
    </div>
  )
}

export default TopNavigation;