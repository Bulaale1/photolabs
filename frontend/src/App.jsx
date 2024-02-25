import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
// import TopNavigation from 'components/TopNavigationBar';
// import PhotoList from 'components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
// <TopNavigation />
// <PhotoList />
// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
    <HomeRoute />
    </div>
  );
};

export default App;
