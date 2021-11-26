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
  console.log(rule);
  const assingColorBg = () => {
    return rule.type === 'DANGER'
      ? 'rule_red'
      : rule.type === 'WARNING'
      ? 'rule_yellow'
      : 'rule_green';
  };
  return (
    <div className={'my-2 rule_container ' + assingColorBg()}>
      <h5>Alerta {rule.color}</h5>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="">Tipo</label>

          <select
            className="form-control"
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
        <div className="form-group col-6">
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
          <p>{rule.type}</p>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="">Calificacion</label>

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
              `categories[${indexCategory}].rules[${indexRule}].feedback.name`,
              {
                required: true,
              }
            )}
          />
          {errors.categories &&
            errors.categories[indexCategory]?.rules[indexRule]?.feedback
              ?.name && (
              <MessageErrorFormComponent
                message={'debe agregar un nombre al feedback'}
              />
            )}
        </div>

        <div>
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
