import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCourses,
  postCourse,
  deleteCourseById,
  updateCourse,
} from '../api/courses/coursesAPI';

export const setAllCourses = createAsyncThunk(
  'courses/getAllCourses',
  async () => {
    const response = await fetchCourses();
    return response.json();
  }
);

export const deleteCourse = createAsyncThunk(
  'courses/deleteCourse',
  async (id) => {
    const response = await deleteCourseById(id);
    return response.json();
  }
);

export const putCourse = createAsyncThunk(
  'courses/putCourse',
  async (course) => {
    const response = await updateCourse(course);
    return response;
  }
);

export const addCourse = createAsyncThunk(
  'courses/addCourse',
  async (course) => {
    const response = await postCourse(course);
    return response.json();
  }
);
