import React from 'react';
import CourseFormComponent from './Components/courseFormComponent/CourseFormComponent';
import './CreateCoursePageComponent.css';
export const CreateCoursePageComponent = () => {
  return (
    <div className="container-page mt-2 text-center">
      <div className=" container_create">
        <h1>Crear Curso</h1>
        <CourseFormComponent />
      </div>
    </div>
  );
};
