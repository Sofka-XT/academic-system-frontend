import React from 'react';
import { FileUploadComponent } from '../fileUploadComponent/FileUploadComponent';
import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';
import './RulesFormComponent.css';
import { useFormContext } from 'react-hook-form';
import { useColorForType } from './../../hooks/useColorForType/useColorForType';
import { useColorBg } from './../../hooks/useColorBg/useColorBg';

export const RulesFormComponent = ({
  indexCategory,
  indexRule,

  rule,
}) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const { color } = useColorForType(rule.type);
  const { colorBg } = useColorBg(rule.type);

  const isAverange = () => {
    return (
      errors.categories &&
      errors.categories[indexCategory]?.rules &&
      errors.categories[indexCategory]?.rules[indexRule] &&
      errors.categories[indexCategory]?.rules[indexRule]?.average
    );
  };
  return (
    <div className={'mt-2 p-3  rule_container  col-4'}>
      <h5 className={`fs-5 ${colorBg}`}>Alerta {rule.color || color}</h5>
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
            <option defaultValue={rule.type} value={rule.type}>
              {rule.color}
            </option>
          </select>
        </div>
        <div className="form-group col-3">
          <label htmlFor="">condición</label>

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
          {isAverange() && (
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
            indexCategory={indexCategory}
            indexRule={indexRule}
          />
        </div>
      </div>
    </div>
  );
};
