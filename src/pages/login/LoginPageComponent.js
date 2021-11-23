import React from 'react';
import { GoogleButtonComponent } from './componentes/GoogleButtonComponent';
import '../login/LoginPageComponent.css';

export const LoginPageComponent = () => {

  return (
    <div>
      <div class="bg-image"></div>
 
      <div class="bg-text">
        <img src="https://i.imgur.com/Tia8Vk2.png"/><br/><br/>
        <p>Bienvenidos al</p>
        <p>Centro de Gestión de SofkaU</p>
        <br/><br/><br/>
        <form action="https://accounts.google.com/" target="_blank">
          <button id="button-registro-google" className="button button2">Registrarse con Google</button>
        </form>
        <br/>
        <GoogleButtonComponent />
      </div>
      {/*<GoogleButtonComponent />*/}
    </div>
  );
};
