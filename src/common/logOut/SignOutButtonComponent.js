import { clearSesion } from '../../api/auth/clearSesion';
import { useAppDispatch } from '../../state/store.hook';
import { signOut } from '../../thunkAction/authThunk';

export const SignOutButtonComponent = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    clearSesion();
    dispatch(signOut());
  };
  return (
    <>
      <button className="button-singout" onClick={handleSignOut}>
        Cerrar sesión
      </button>
    </>
  );
};
