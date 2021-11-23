import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CategoryFormComponet } from '../categoryFormComponent/CategoryFormComponet';
export const CourseFormComponent = () => {
  const handleAppendCategory = useRef(null);
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Nombre Categoria</label>
      <input defaultValue="" {...register('example', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <CategoryFormComponet
        control={control}
        register={register}
        handleAppendCategory={handleAppendCategory}
      />
      <button type="button" onClick={() => handleAppendCategory.current()}>
        {' '}
        agregar
      </button>
      <input type="submit" />
      <br />
      <br />
      <br />

      <hr />
      <br />
      <p>{JSON.stringify(watch())}</p>
    </form>
  );
};
