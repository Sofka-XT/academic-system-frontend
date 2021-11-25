import React, { useEffect } from 'react';

import { useAppDispatch } from '../../../state/store.hook';

import { useNavigate, useParams } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { putCourse } from '../../../thunkAction/coursesThunk';

import { CourseGeneralFormComponent } from './courseGeneralFormComponent/CourseGeneralFormComponent';

const EditCoursePageComponent = ({ loading, error, courses }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    course = courses.filter((course) => course.id === params.courseId)[0];
  }, [courses]);
  let course = courses.filter((course) => course.id === params.courseId)[0];

  const handleCreateCourse = (data) => {
    data.id = params.courseId;
    console.log(data);
    dispatch(putCourse(data))
      .then(unwrapResult)
      .then((courseData) => {
        console.log(courseData);
        if (!course.error) {
          navigate(`/dashboard/coursedetail/${course.id}`);
        }
      });
  };
  const onSubmit = (data) => handleCreateCourse(data);

  return (
    <>
      <h1>{error + ''}</h1>
      {!loading && (
        <CourseGeneralFormComponent
          onSubmit={onSubmit}
          formDefaultValue={course}
          actionMsjButton={'EDITAR'}
        />
      )}

      {loading && <p>loading</p>}
    </>
  );
};
const mapState = (state) => ({
  loading: state.coursesReducer.loading,
  error: state.coursesReducer.error,
  courses: state.coursesReducer.courses,
});

export default connect(mapState)(EditCoursePageComponent);
