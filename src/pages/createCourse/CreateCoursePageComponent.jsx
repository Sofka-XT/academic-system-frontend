import React from 'react';
import CourseFormComponent from './Components/courseFormComponent/CourseFormComponent';
import './CreateCoursePageComponent.css';
export const CreateCoursePageComponent = () => {
  return (
    <div className="container-page mt-2 ">
      <div className=" container_create">
        <h1 className="text-white">Crear Curso</h1>
        <CourseFormComponent />
      </div>
    </div>
  );
};
