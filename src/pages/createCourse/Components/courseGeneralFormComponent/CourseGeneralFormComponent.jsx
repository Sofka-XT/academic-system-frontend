import React, { useRef } from 'react';
import { MessageErrorFormComponent } from '../messageErrorFormComponent/MessageErrorFormComponent';
import { CategoryFormComponet } from '../categoryFormComponent/CategoryFormComponet';
import { useForm } from 'react-hook-form';
export const CourseGeneralFormComponent = ({
  onSubmit,
  formDefaultValue,
  actionMsjButton,
}) => {
  const handleAppendCategory = useRef(null);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: formDefaultValue });
  return (
    <form className=" my-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="">Nombre Curso</label>
          <input
            className="form-control"
            defaultValue=""
            {...register('name', { required: true })}
          />
          {errors.name && (
            <MessageErrorFormComponent message={'debe agregar un curso'} />
          )}
        </div>

        <div className="form-group p-2 my-3 col-6 text-center">
          <button
            className="btn btn-success mx-3"
            type="button"
            onClick={() => handleAppendCategory.current()}
          >
            AGREGAR CATEGORIA
          </button>
          <button
            className="btn btn-primary mx-3 "
            disabled={Object.keys(errors).length > 0}
            type="submit"
          >
            {actionMsjButton}
          </button>
        </div>
      </div>
      <CategoryFormComponet
        errors={errors}
        control={control}
        register={register}
        handleAppendCategory={handleAppendCategory}
        setValue={setValue}
        getValues={getValues}
      />
    </form>
  );
};
