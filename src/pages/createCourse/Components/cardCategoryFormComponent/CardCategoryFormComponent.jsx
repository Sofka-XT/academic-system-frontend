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
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className=" w-25">
          <input
            placeholder="Nombre categoria"
            className="form-control "
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
        {errors.categories && errors.categories[index] && (
          <MessageErrorFormComponent
            message={'tiene errores en la categoria'}
          />
        )}
        <div>
          <button
            type="button"
            className="btn btn-success mx-3 "
            onClick={() => setToggle(!toggle)}
          >
            Reglas {toggle === true ? '+' : '-'}
          </button>
          <button
            type="button"
            className="btn btn-danger  mx-3"
            onClick={() => remove(index)}
          >
            Descartar
          </button>
        </div>
      </div>

      <div className={toggle === true ? 'd-none' : ''}>
        <div className="form-group d-flex justify-content-between mt-1">
          <div className="w-25"></div>
          <div></div>
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
