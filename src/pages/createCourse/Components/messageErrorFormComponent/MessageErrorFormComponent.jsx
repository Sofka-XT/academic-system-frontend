import React from 'react';
import './MessageErrorFormComponent.css';
export const MessageErrorFormComponent = ({ message }) => {
  return (
    <div className="mt-3 message">
      <span className="message_span">{message}</span>
    </div>
  );
};
