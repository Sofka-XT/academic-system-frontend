import { createAsyncThunk } from '@reduxjs/toolkit';

export const setAllCourses = createAsyncThunk(
  'courses/getAllCourses',
  async () => {
    const response = await 'function api';
    return response;
  }
);

export const deleteCourse = createAsyncThunk(
  'courses/deleteCourse',
  async () => {
    const response = await 'function api';
    return response;
  }
);

export const putCourse = createAsyncThunk('courses/putCourse', async () => {
  const response = await 'function api';
  return response;
});

export const addCourse = createAsyncThunk('courses/addCourse', async (data) => {
  const response = await 'function api';
  return data;
});
