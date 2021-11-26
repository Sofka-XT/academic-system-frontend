import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../state/store.hook';
import { loginWhitGoogle } from '../../../thunkAction/authThunk';
import { connect } from 'react-redux';
import '../LoginPageComponent.css';

export const GoogleButtonComponent = ({ history, user }) => {
	
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	
	const handleLogin = () => {
		dispatch(loginWhitGoogle())
			.then(unwrapResult)
			.then(() => {
				if(user){
					navigate('/dashboard/home');
				}
			});
	};


  return (
    <>
      <button id="button-login-google" className="button button2" onClick={handleLogin} aria-hidden="true">
      Iniciar sesión con Google
      </button>
    </>
  );
};

const mapState = (state) => ({
	user: state.authReducer.user,
});
export default connect(mapState)(GoogleButtonComponent);
