import React, { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import './categoryFormComponent.css';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';
import { RulesFormComponent } from '../rulesFormComponent/RulesFormComponent';
export const CategoryFormComponet = ({
  errors,
  register,
  control,
  handleAppendCategory,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories',
  });
  useEffect(() => {
    const handleAppend = () => {
      append({});
    };
    handleAppendCategory.current = handleAppend;
  }, [append, handleAppendCategory]);

  const rules = [
    {
      color: 'Roja',
      value: 'DANGER',
    },
    {
      color: 'Amarilla',
      value: 'WARNING',
    },
    {
      color: 'Verde',
      value: 'SUCCESS',
    },
  ];

  return (
    <>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="container_category my-3">
            <button
              type="button"
              className="btn btn-danger float-end"
              onClick={() => remove(index)}
            >
              X
            </button>
            <div className="">
              <h5>Categoria</h5>
            </div>

            <div className="form-group col">
              <label htmlFor="">Nombre Categoria</label>
              <input
                className="form-control"
                {...register(`categories[${index}].name`, { required: true })}
              />
              {errors.categories && errors.categories[index]?.name && (
                <MessageErrorFormComponent
                  message={'debe agregar nombre de categoria'}
                />
              )}
            </div>

            {rules.map((rule, indexRule) => {
              return (
                <RulesFormComponent
                  key={indexRule}
                  register={register}
                  errors={errors}
                  indexCategory={index}
                  indexRule={indexRule}
                  rule={rule}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};
