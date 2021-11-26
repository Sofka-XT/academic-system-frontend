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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CourseFormComponent = ({ loading, error }) => {
  const MySwal = withReactContent(Swal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateCourse = (data) => {
    dispatch(addCourse(data))
      .then(unwrapResult)
      .then((course) => {
        if (!course.error) {
          MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            didOpen: () => {
              MySwal.clickConfirm();
            },
          }).then(() => {
            MySwal.fire(<p>Creado</p>);
            navigate(`/dashboard/coursedetail/${course.id}`);
          });
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
