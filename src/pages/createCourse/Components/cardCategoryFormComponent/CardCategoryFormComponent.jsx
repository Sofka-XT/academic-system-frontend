import React, { useState } from 'react';
import { RulesFormComponent } from './../rulesFormComponent/RulesFormComponent';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';

export const CardCategoryFormComponent = ({
  errors,
  register,
  setValue,
  index,
  rules,
  remove,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h5>Nueva Categoria</h5>
        {errors.categories && errors.categories[index] && (
          <MessageErrorFormComponent
            message={'tiene errores en la categoria'}
          />
        )}
        <button
          type="button"
          className="btn btn-danger  "
          onClick={() => setToggle(!toggle)}
        >
          ///
        </button>
      </div>

      <div className={toggle === true ? 'd-none' : ''}>
        <div className="form-group d-flex justify-content-between mt-1">
          <div className="w-25">
            <label htmlFor="">Nombre Categoria</label>
            <input
              className="form-control"
              {...register(`categories[${index}].name`, {
                required: true,
              })}
            />
            {errors.categories && errors.categories[index]?.name && (
              <MessageErrorFormComponent
                message={'debe agregar nombre de categoria'}
              />
            )}
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => remove(index)}
            >
              X
            </button>
          </div>
        </div>
        <div className="row w-100">
          {rules.map((rule, indexRule) => {
            return (
              <RulesFormComponent
                key={indexRule}
                register={register}
                errors={errors}
                indexCategory={index}
                indexRule={indexRule}
                rule={rule}
                setValue={setValue}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
