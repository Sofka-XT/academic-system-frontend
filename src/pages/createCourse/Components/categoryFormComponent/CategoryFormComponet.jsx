import React, { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';

export const CategoryFormComponet = ({
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
  return (
    <>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="">
            <div className="form-row">
              <div class="form-group col-md-6">
                <label htmlFor="">Nombre Categoria</label>
                <input
                  className="form-control"
                  {...register(`categories[${index}].name`)}
                />
              </div>

              {/* <div class="form-group col-md-6"></div> */}

              <div class="form-group col-md-6">
                <label htmlFor="">Tipo</label>

                <select
                  className="form-control"
                  name="type"
                  id=""
                  {...register(`categories[${index}].type`)}
                >
                  <option value="0">Roja</option>
                  <option value="1">Amarrilla</option>
                  <option value="2">verde</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label htmlFor="">condicion</label>

              <select
                className="form-control"
                name="condition"
                id=""
                {...register(`categories[${index}].condition`)}
              >
                <option value="<">{'<'}</option>
                <option value=">">{'>'}</option>
                <option value="=">=</option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <label htmlFor="">Porcentaje</label>

              <input
                className="form-control"
                type="number"
                {...register(`categories[${index}].averange`)}
              />
            </div>

            <input
              type="text"
              {...register(`categories[${index}].feedback.name`)}
            />
            <button type="button" onClick={() => remove(index)}></button>
          </div>
        );
      })}
    </>
  );
};
