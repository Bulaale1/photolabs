import React from 'react';

import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs
      <div className="nav-links">
        <a href="#">Topics</a>
        <a href="#">Liked Photos</a>
        <img src="#" alt="App Logo" />
        
      </div>
      </span>
    </div>
  )
}

export default TopNavigation;