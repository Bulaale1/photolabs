import React,{useState} from 'react';

// import PhotoList from 'components/PhotoList';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import  photos from '../src/mocks/photos';
import  topics from '../src/mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
    <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} />
    {displayModal && <PhotoDetailsModal  closeModal={() => setDisplayModal(false)}
    selectedImage={()=>setSelectedImage(null)}/>}
     
    </div>
  );
};

export default App;
