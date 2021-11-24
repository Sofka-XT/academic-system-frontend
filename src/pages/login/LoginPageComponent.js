import React, { useEffect } from 'react';
import { GoogleButtonComponent } from './componentes/GoogleButtonComponent';
import '../login/LoginPageComponent.css';
import { useAppDispatch } from '../../state/store.hook';
import { signInwWithLocalStorage } from '../../thunkAction/authThunk';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

const LoginPageComponent = ( { user }) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
	}, [user, navigate])

  useEffect(() => {
		console.log("Use effect")
		dispatch(signInwWithLocalStorage());
    console.log(user)
	}, [])

  return (
    <div>
      <div className="bg-image"></div>
 
      <div className="bg-text">
        <img src="https://i.imgur.com/Tia8Vk2.png"/><br/><br/>
        <p>Bienvenidos al</p>
        <p>Centro de Gestión de SofkaU</p>
        <br/><br/><br/><br/><br/>
        <br/>
        <GoogleButtonComponent />
      </div>
    </div>
  );
};


const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(LoginPageComponent);