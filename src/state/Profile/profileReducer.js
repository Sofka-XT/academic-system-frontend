import { createSlice } from "@reduxjs/toolkit";
import { getApprenticeInfo } from "../../thunkAction/profileThunk";

const initialState = {
    apprentice: null,
    loading: false,
    error: null,
    redirect: null
  };
  
  export const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getApprenticeInfo.fulfilled, (state, action) => {
          state.apprentice = {...action.payload, 
            categoriesName: action.payload.courseScores?.
            flatMap(course => course.categoryScoreList.map(category => category.categoryName)),
            
            grades: action.payload.courseScores?.
            flatMap(course => course.categoryScoreList.map(category => category.score)),
        };
          state.loading = false;
        });
    },
  });
  
  export default profileReducer.reducer;