import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginGoogle, signOutFirebase } from '../api/auth/authRequest';
import fetchRole from '../api/auth/fetchRole';


export const loginWhitGoogle = createAsyncThunk(
  'auth/loginWhitGoogleStatus',
  async () => {
    const response = await loginGoogle();
    const user = await fetchRole(response)
    return user
}
);

export const signOut = createAsyncThunk('auth/signOutStatus', async () => {
  return await signOutFirebase();
});
