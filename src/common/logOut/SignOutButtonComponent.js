import { useAppDispatch } from '../../state/store.hook';
import { signOut } from '../../thunkAction/authThunk';

export const SignOutButtonComponent = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <>
      <button className="button right" onClick={handleSignOut}>
        Sign out
      </button>
    </>
  );
};
