import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginGoogle, signOutFirebase } from '../api/auth/authRequest';

export const loginWhitGoogle = createAsyncThunk(
  'auth/loginWhitGoogleStatus',
  async () => {
    const response = await loginGoogle();
    return response.user.uid;
  }
);

export const signOut = createAsyncThunk('auth/signOutStatus', async () => {
  return await signOutFirebase();
});
