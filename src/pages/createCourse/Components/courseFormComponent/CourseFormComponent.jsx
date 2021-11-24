import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../state/store.hook';
import { addCourse } from '../../../../thunkAction/coursesThunk';
import { CategoryFormComponet } from '../categoryFormComponent/CategoryFormComponet';
import './CourseFormComponent.css';

export const CourseFormComponent = () => {
  const dispatch = useAppDispatch();
  const handleAppendCategory = useRef(null);
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCreateCourse = (data) => {
    dispatch(addCourse(data));
  };
  const onSubmit = (data) => handleCreateCourse(data);

  return (
    <form className="container_form my-4" onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
        <label htmlFor="">Nombre Curso</label>
        <input
          className="form-control"
          defaultValue=""
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <CategoryFormComponet
        control={control}
        register={register}
        handleAppendCategory={handleAppendCategory}
      />

      <div className="p-2 my-3">
        <button
          className="btn btn-primary mx-3"
          type="button"
          onClick={() => handleAppendCategory.current()}
        >
          Agregar
        </button>
        <button
          className="btn btn-primary mx-3"
          disabled={Object.keys(errors).length > 0}
          type="submit"
        >
          Crear
        </button>
      </div>
    </form>
  );
};
