import React, { useEffect } from 'react';
import { GoogleButtonComponent } from './componentes/GoogleButtonComponent';
import '../login/LoginPageComponent.css';
import { useAppDispatch } from '../../state/store.hook';
import { signInwWithLocalStorage } from '../../thunkAction/authThunk';
import { connect } from 'react-redux';
import { useNavigate} from 'react-router';

const LoginPageComponent = ( { user }) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const lastPath = sessionStorage.getItem('reloaded')
    if (user) {
       lastPath.length > 5 ? navigate(lastPath.slice(1)) : navigate('/dashboard/home')
    }
	}, [user, navigate])

  useEffect(() => {
		dispatch(signInwWithLocalStorage());
	}, [dispatch])

  return (
    <div>
      <div className="bg-image"></div>
 
      <div className="bg-text">
        <img src="https://i.imgur.com/Tia8Vk2.png" alt="SofkaU logo"/><br/><br/>
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