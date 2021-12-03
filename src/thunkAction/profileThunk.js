import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApprenticeProfile } from "../api/profile/profileAPI";

export const getApprenticeInfo = createAsyncThunk('profile/getApprenticeInfo',
    async (email) => {
      const response = await getApprenticeProfile(email);
      return response.json();
    }
  );