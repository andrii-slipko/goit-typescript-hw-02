import React from 'react';

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red', textAlign: 'center' }}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;