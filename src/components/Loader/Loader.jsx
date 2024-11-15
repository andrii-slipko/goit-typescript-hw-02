import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <div style={{ textAlign: 'center' }}>
    <RotatingLines width="50" />
  </div>
);

export default Loader;