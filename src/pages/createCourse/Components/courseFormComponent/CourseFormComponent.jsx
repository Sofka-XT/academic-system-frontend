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
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
        <label htmlFor="">Nombre Categoria</label>
        <input
          className="form-control"
          defaultValue=""
          {...register('example', { required: true })}
        />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}
      <CategoryFormComponet
        control={control}
        register={register}
        handleAppendCategory={handleAppendCategory}
      />

      <button
        className=""
        type="button"
        onClick={() => handleAppendCategory.current()}
      >
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
