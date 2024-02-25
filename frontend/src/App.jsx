import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import  photos from '../src/mocks/photos';
import  topics from '../src/mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
    <HomeRoute photoData = {photos} />
    <HomeRoute topic ={topics}/>
    </div>
  );
};

export default App;
