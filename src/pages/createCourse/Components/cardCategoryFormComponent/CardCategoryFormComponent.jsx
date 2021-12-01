import React, { useState } from 'react';
import { RulesFormComponent } from './../rulesFormComponent/RulesFormComponent';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';
import { useFormContext } from 'react-hook-form';
import { AddUrlGradesComponent } from '../addUrlGradesComponent/AddUrlGradesComponent';

export const CardCategoryFormComponent = ({ index, rules, remove }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className=" w-25">
          <input
            placeholder="Nombre categoría"
            className="form-control "
            {...register(`categories[${index}].name`, {
              required: true,
            })}
          />
          {errors.categories && errors.categories[index]?.name && (
            <MessageErrorFormComponent
              message={'debe agregar nombre de categoría'}
            />
          )}
        </div>
        {errors.categories && errors.categories[index] && (
          <MessageErrorFormComponent
            message={'tiene errores en la categoría'}
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
        <div className="row w-100">
          {rules.map((rule, indexRule) => {
            return (
              <RulesFormComponent
                key={indexRule}
                indexCategory={index}
                indexRule={indexRule}
                rule={rule}
              />
            );
          })}
        </div>

        <div>
          <AddUrlGradesComponent indexCategory={index} />
        </div>
      </div>
    </>
  );
};
