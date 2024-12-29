import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { Image } from '../../types/types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button className={styles.btn} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.img}
        src={image.urls.regular}
        alt={image.alt_description || 'Image'}
        style={{ width: '100%' }}
      />
      <div>
        <h3>{image.user.name}</h3>
        <p>{image.likes} Likes</p>
        {image.description && <p>{image.description}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;