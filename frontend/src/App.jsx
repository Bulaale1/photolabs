import React,{useState} from 'react';

// import PhotoList from 'components/PhotoList';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import  photos from '../src/mocks/photos';
import  topics from '../src/mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
 // {displayModal && <PhotoDetailsModal />}
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
    <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
    {displayModal && <PhotoDetailsModal />}
     
    </div>
  );
};

export default App;
