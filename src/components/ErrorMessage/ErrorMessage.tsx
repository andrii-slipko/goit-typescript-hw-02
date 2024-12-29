import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div style={{ color: 'red', textAlign: 'center' }}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;