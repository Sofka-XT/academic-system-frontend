import React from 'react';
import { FileUploadComponent } from '../fileUploadComponent/FileUploadComponent';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';
import './RulesFormComponent.css';
export const RulesFormComponent = ({
  errors,
  register,
  indexCategory,
  indexRule,
  setValue,
  rule,
}) => {
  const assingColorName = () => {
    return rule.type === 'DANGER'
      ? 'ROJO'
      : rule.type === 'WARNING'
      ? 'AMARILLO'
      : 'VERDE';
  };

  const assingColorBg = () => {
    return rule.type === 'DANGER'
      ? 'rule_red'
      : rule.type === 'WARNING'
      ? 'rule_yellow'
      : 'rule_green';
  };
  return (
    <div className={'mt-2 p-3  rule_container  col-4'}>
      <h5 className={assingColorBg() + ' fs-5'}>
        Alerta {rule.color || assingColorName()}
      </h5>
      <div className="row">
        <div className="form-group  d-none">
          <label htmlFor="">Tipo</label>

          <select
            className="form-control "
            name="type"
            id=""
            {...register(
              `categories[${indexCategory}].rules[${indexRule}].type`,
              {
                required: true,
              }
            )}
          >
            <option defaultValue={rule.type} value={rule.type} selected>
              {rule.color}
            </option>
          </select>
        </div>
        <div className="form-group col-3">
          <label htmlFor="">Condicion</label>

          <select
            className="form-control"
            name="condition"
            id=""
            {...register(
              `categories[${indexCategory}].rules[${indexRule}].condition`,
              {
                required: true,
              }
            )}
          >
            <option value="<">{'<'}</option>
            <option value=">">{'>'}</option>
            <option value="=">=</option>
          </select>
        </div>

        <div className="form-group col-3">
          <label htmlFor="">Nota</label>

          <input
            className="form-control"
            type="number"
            min="0"
            max="100"
            {...register(
              `categories[${indexCategory}].rules[${indexRule}].average`,
              {
                required: true,
              }
            )}
          />
          {errors.categories &&
            errors.categories[indexCategory]?.rules &&
            errors.categories[indexCategory]?.rules[indexRule] &&
            errors.categories[indexCategory]?.rules[indexRule]?.average && (
              <MessageErrorFormComponent
                message={'debe agregar un calificacion'}
              />
            )}
        </div>
        <div className="form-group col-6">
          <label htmlFor="">FeedBack name</label>

          <input
            type="text"
            className="form-control"
            {...register(
              `categories[${indexCategory}].rules[${indexRule}].feedback.name`
            )}
          />
        </div>

        <div className="form-group col-12 mt-2 ">
          <FileUploadComponent
            register={register}
            indexCategory={indexCategory}
            indexRule={indexRule}
            errors={errors}
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  );
};
