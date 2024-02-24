import React from 'react';

import PhotoListItem from './components/PhotoListItem';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
 
// const photos = [...Array(3)];
// const photoItems = photos.map((photo, index) => 
// <PhotoListItem key={index} data={sampleDataForPhotoListItem} />
// );
  return (
    <div className="App">

     {photoItems}

    </div>
  );
};

export default App;
