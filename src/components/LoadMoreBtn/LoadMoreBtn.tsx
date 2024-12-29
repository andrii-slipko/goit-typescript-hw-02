import React from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={styles.btn} onClick={onClick} style={{ display: 'block', margin: '20px auto' }}>
    Load more
  </button>
);

export default LoadMoreBtn;