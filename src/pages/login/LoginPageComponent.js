import React from 'react';
import { GoogleButtonComponent } from './componentes/GoogleButtonComponent';
import '../login/LoginPageComponent.css';

export const LoginPageComponent = () => {

  return (
    <div>
      <div className="bg-image"></div>
 
      <div className="bg-text">
        <img src="https://i.imgur.com/Tia8Vk2.png" alt="img1"/><br/><br/>
        <p>Bienvenidos al</p>
        <p>Centro de Gestión de SofkaU</p>
        <br/><br/><br/><br/><br/>
        <br/>
        <GoogleButtonComponent />
      </div>
    </div>
  );
};
