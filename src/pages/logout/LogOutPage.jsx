import { SignOutButtonComponent } from '../../common/logOut/SignOutButtonComponent';
import React from 'react';
import './SingOut.css';

export const LogOutPage = () => {
  return (
    <>
      <div className="sing-out-container" id="container-logout-view">
        <div className="img-container">
        </div>
        <div className="modal-form-container">
            <div>
              <h1>CERRAR SESIÓN</h1>
              <p>¿Estás seguro que deseas cerrar sesión?</p>
            </div>
            <div>
              <SignOutButtonComponent />
            </div>
          </div>
      </div>
    </>
  );
};
