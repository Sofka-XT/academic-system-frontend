import React, { useRef } from 'react';
import { MessageErrorFormComponent } from '../messageErrorFormComponent/MessageErrorFormComponent';
import { CategoryFormComponet } from '../categoryFormComponent/CategoryFormComponet';
import { useForm, FormProvider } from 'react-hook-form';
import './CourseGeneralFormComponent.css';
export const CourseGeneralFormComponent = ({
  onSubmit,
  formDefaultValue,
  actionMsjButton,
}) => {
  const handleAppendCategory = useRef(null);
  const methods = useForm({ defaultValues: formDefaultValue });
  return (
    <FormProvider {...methods}>
      <form className=" my-4 fs-1 " onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group col-6">
            <div className="d-flex justify-content-center">
              {/* <label htmlFor="">Nombre Curso</label> */}
              <input
                className="form-control"
                placeholder="Nombre de curso"
                {...methods.register('name', { required: true })}
              />
              {methods.formState.errors.name && (
                <MessageErrorFormComponent message={'debe agregar un curso'} />
              )}
            </div>
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
              className="btn  btn-primary mx-3 "
              disabled={Object.keys(methods.formState.errors).length > 0}
              type="submit"
            >
              {actionMsjButton}
            </button>
          </div>
        </div>
        <CategoryFormComponet
          handleAppendCategory={handleAppendCategory}
          setValue={methods.setValue}
          getValues={methods.getValues}
        />
      </form>
    </FormProvider>
  );
};
