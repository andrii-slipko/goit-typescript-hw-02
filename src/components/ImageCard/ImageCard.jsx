import React from 'react';
import styles from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
      <div className={styles.card} onClick={onClick} style={{ cursor: 'pointer' }}>
        <img className={styles.img} src={image.urls.small} alt={image.alt_description} />
      </div>
    );
  };
  
  export default ImageCard;