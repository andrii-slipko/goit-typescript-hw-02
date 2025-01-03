import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { Image } from '../../types/types';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.photolist}>
      {images.map((image) => (
        <li className={styles.photoListItem} key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;