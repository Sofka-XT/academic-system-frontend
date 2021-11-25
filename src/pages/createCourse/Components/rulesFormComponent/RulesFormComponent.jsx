import React from 'react';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';
import './RulesFormComponent.css';
export const RulesFormComponent = ({
  errors,
  register,
  indexCategory,
  indexRule,
  rule,
}) => {
  const assingColorBg = () => {
    return rule.value === 'DANGER'
      ? 'rule_red'
      : rule.value === 'WARNING'
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
            <option defaultValue={rule.value} value={rule.value}>
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
        </div>
      </div>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="">Calificacion</label>

          <input
            className="form-control"
            type="number"
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
      </div>
    </div>
  );
};
