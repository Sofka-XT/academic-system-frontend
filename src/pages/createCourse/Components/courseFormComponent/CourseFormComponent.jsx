import React from 'react';

import { useAppDispatch } from '../../../../state/store.hook';
import { addCourse } from '../../../../thunkAction/coursesThunk';

import './CourseFormComponent.css';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { CourseGeneralFormComponent } from '../courseGeneralFormComponent/CourseGeneralFormComponent';
import { LoaderLoadingComponent } from './../../../../common/Loader/LoaderLoadingComponent';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';

const CourseFormComponent = ({ loading, error }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateCourse = (data) => {
    console.log(data);
    dispatch(addCourse(data))
      .then(unwrapResult)
      .then((course) => {
        if (!course.error) {
          navigate(`/dashboard/coursedetail/${course.id}`);
        }
      });
  };
  const onSubmit = (data) => handleCreateCourse(data);

  return (
    <>
      <h1>{error && <MessageErrorFormComponent message={error + ''} />}</h1>
      {!loading && (
        <CourseGeneralFormComponent
          onSubmit={onSubmit}
          formDefaultValue={{}}
          actionMsjButton={'CREAR'}
        />
      )}

      {loading && <LoaderLoadingComponent />}
    </>
  );
};
const mapState = (state) => ({
  loading: state.coursesReducer.loading,
  error: state.coursesReducer.error,
});

export default connect(mapState)(CourseFormComponent);
