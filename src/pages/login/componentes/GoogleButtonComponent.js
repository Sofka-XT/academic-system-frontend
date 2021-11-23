import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../state/store.hook';
import { loginWhitGoogle } from '../../../thunkAction/authThunk';
import '../LoginPageComponent.css';

export const GoogleButtonComponent = ({ history }) => {
	
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	
	const handleLogin = () => {
		dispatch(loginWhitGoogle())
			.then(unwrapResult)
			.then(() => {
				navigate('/dashboard');
			});
	};


  return (
    <>
      <button className="button button2" onClick={handleLogin} aria-hidden="true">
      Iniciar sesión con Google
      </button>
    </>
  );
};
