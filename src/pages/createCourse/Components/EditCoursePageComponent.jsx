import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../state/store.hook';

import { useNavigate, useParams } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { putCourse } from '../../../thunkAction/coursesThunk';

import { CourseGeneralFormComponent } from './courseGeneralFormComponent/CourseGeneralFormComponent';
import { LoaderLoadingComponent } from './../../../common/Loader/LoaderLoadingComponent';
import { MessageErrorFormComponent } from './messageErrorFormComponent/MessageErrorFormComponent';

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
          navigate(`/dashboard/courseslist/coursedetail/${course.id}`);
        }
      });
  };
  const onSubmit = (data) => handleCreateCourse(data);

  return (
    <>
      <h1>{error && <MessageErrorFormComponent message={error + ''} />}</h1>
      <div className="container-fluid w-75 h-100">
        <div className="row">
          <h1 className="text-center">Editando curso</h1>
          <div className="col-12"></div>
          {!loading && (
            <CourseGeneralFormComponent
              onSubmit={onSubmit}
              formDefaultValue={course}
              actionMsjButton={'EDITAR'}
            />
          )}
        </div>
      </div>

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
