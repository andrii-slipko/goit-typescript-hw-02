import React from 'react';
import styles from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
  <button className={styles.btn} onClick={onClick} style={{ display: 'block', margin: '20px auto' }}>
    Load more
  </button>
);

export default LoadMoreBtn;