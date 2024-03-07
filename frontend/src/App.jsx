import React,{useState} from 'react';


import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import  photos from '../src/mocks/photos';
import  topics from '../src/mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Implement the toggleFavourite function
  const toggleFavourite = (photoId, isFavorite) => {
     if (isFavorite) {
       // If the photo is already favorited, remove it from the favorites list
       setFavorites(favorites.filter(id => id !== photoId));
     } else {
       // If the photo is not favorited, add it to the favorites list
       setFavorites([...favorites, photoId]);
     }
    }
  return (
    <div className="App">
    <HomeRoute 
    photos={photos} 
    topics={topics} 
    setDisplayModal={setDisplayModal} 
    toggleFavourite={toggleFavourite}
    setSelectedImage={setSelectedImage}/>
    {displayModal && <PhotoDetailsModal  closeModal={() => setDisplayModal(false)}
    selectedImage={selectedImage} />}
     
    </div>
  );
};

export default App;
