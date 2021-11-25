import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../state/store.hook';

import { useNavigate, useParams } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { putCourse } from '../../../thunkAction/coursesThunk';

import { CourseGeneralFormComponent } from './courseGeneralFormComponent/CourseGeneralFormComponent';
import { LoaderLoadingComponent } from './../../../common/Loader/LoaderLoadingComponent';

const EditCoursePageComponent = ({ loading, error, courses }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [course, setCourse] = useState(
    courses.filter((course) => course.id === params.courseId)[0]
  );

  useEffect(() => {
    setCourse(courses.filter((course) => course.id === params.courseId)[0]);
  }, [courses, params.courseId]);

  const handleCreateCourse = (data) => {
    data.id = params.courseId;

    dispatch(putCourse(data))
      .then(unwrapResult)
      .then((courseData) => {
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

      {loading && <LoaderLoadingComponent />}
    </>
  );
};
const mapState = (state) => ({
  loading: state.coursesReducer.loading,
  error: state.coursesReducer.error,
  courses: state.coursesReducer.courses,
});

export default connect(mapState)(EditCoursePageComponent);
