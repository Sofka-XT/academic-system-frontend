import React from 'react';
import { GoogleButtonComponent } from './componentes/GoogleButtonComponent';
import '../login/LoginPageComponent.css';
import logo from '../../resources/images/logo-2.png';

export const LoginPageComponent = () => {
  return (
    <div>
      <div class="bg-image"></div>
 
      <div class="bg-text">
        <img src={logo}/><br/><br/>
        <p>Bienvenidos al</p>
        <p>Centro de Gestión de SofkaU</p>
        <br/><br/><br/>
        <button className="button button2">Registrarse con Google</button>
        <br/><br/>
        <GoogleButtonComponent />
      </div>
      {/*<GoogleButtonComponent />*/}
    </div>
  );
};
