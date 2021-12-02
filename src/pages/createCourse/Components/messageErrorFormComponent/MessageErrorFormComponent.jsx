import React from 'react';
import './MessageErrorFormComponent.css';
export const MessageErrorFormComponent = ({ message }) => {
  return (
    <div className=" message">
      <span className="message_span">{message}</span>
    </div>
  );
};
