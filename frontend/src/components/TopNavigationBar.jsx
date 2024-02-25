import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import  Topics from '../mocks/topics';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs </span>
      <TopicList topics = {Topics} />
      <FavBadge />
    </div>
  )
}

export default TopNavigation;