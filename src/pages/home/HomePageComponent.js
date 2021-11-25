import { SignOutButtonComponent } from '../../common/logOut/SignOutButtonComponent';
import React from 'react';
import './SingOut.css';

export const HomePageComponent = () => {
  return (
    <>
      <div className="sing-out-container">
        <div className="img-container"></div>
        <div className="modal-form-container">
          <div>
            <h1>CERRAR SESIÓN</h1>
            <p>¿Estas seguro que deseas cerrar sesión?</p>
          </div>
          <div>
            <SignOutButtonComponent />
          </div>
        </div>
      </div>
    </>
  );
};
