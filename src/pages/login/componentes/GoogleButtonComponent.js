import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../state/store.hook';
import { loginWhitGoogle } from '../../../thunkAction/authThunk';

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
      <button className="" onClick={handleLogin} aria-hidden="true">
        <img
          width={'20px'}
          src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
          alt="GOOGLE"
        />
        Google
      </button>
    </>
  );
};
