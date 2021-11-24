import { createSlice } from '@reduxjs/toolkit';
import {
  setAllCourses,
  addCourse,
  putCourse,
  deleteCourse,
} from './../../thunkAction/coursesThunk';
const initialState = {
  courses: [],
  loading: false,
  error: null,
};

export const coursesReducer = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAllCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(setAllCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setAllCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addCourse.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action);
      state.courses = [...state.courses, action.payload];
    });
    builder.addCase(addCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(putCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = state.courses.map((course) => {
        if (course.id === action.payload.id) {
          return action.payload;
        }
        return course;
      });
    });
    builder.addCase(putCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(putCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload.id
      );
    });
    builder.addCase(deleteCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default coursesReducer.reducer;
