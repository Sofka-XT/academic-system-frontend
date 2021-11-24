import React from 'react';
import { CourseFormComponent } from './Components/courseFormComponent/CourseFormComponent';
import './CreateCoursePageComponent.css';
export const CreateCoursePageComponent = () => {
  return (
    <div className="container-page mt-5 text-center">
      <h1>Crear Curso</h1>
      <CourseFormComponent />
    </div>
  );
};
