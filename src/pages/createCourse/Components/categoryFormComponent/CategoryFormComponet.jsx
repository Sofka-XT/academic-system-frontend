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
          <div key={field.id}>
            <label htmlFor="">nombre </label>
            <input {...register(`categories[${index}].name`)} />
            <select
              name="type"
              id=""
              {...register(`categories[${index}].type`)}
            >
              <option value="0">Roja</option>
              <option value="1">Amarrilla</option>
              <option value="2">verde</option>
            </select>
            <select
              name="condition"
              id=""
              {...register(`categories[${index}].condition`)}
            >
              <option value="<">{'<'}</option>
              <option value=">">{'>'}</option>
              <option value="=">=</option>
            </select>
            <input
              type="number"
              {...register(`categories[${index}].averange`)}
            />

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
