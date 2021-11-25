import { SignOutButtonComponent } from '../../common/logOut/SignOutButtonComponent';
import React from 'react';
import './SingOut.css';

export const HomePageComponent = () => {
  return (
    <>
      <div className="sing-out-container">
        <h1>CERRAR SESIÓN</h1>
        <div>
          <SignOutButtonComponent />
        </div>
      </div>
    </>
  );
};
