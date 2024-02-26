import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {closeModal} = props;

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <div className={`photo-details-modal ${modalOpen ? 'open' : ''}`}>
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;