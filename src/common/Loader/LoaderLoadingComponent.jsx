import React from 'react';
import './LoaderLoadingComponent.css';
export const LoaderLoadingComponent = () => {
  return (
    <div className="wrapper_loading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Loading</span>
    </div>
  );
};
