import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from '../api/courses/coursesAPI';

export const setAllCourses = createAsyncThunk(
  'courses/getAllCourses',
  async () => {
    const response = await fetchCourses();
    return response.json();
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

export const addCourse = createAsyncThunk('courses/addCourse', async () => {
  const response = await 'function api';
  return response;
});
