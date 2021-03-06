import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import './categoryFormComponent.css';

import { CardCategoryFormComponent } from '../cardCategoryFormComponent/CardCategoryFormComponent';

export const CategoryFormComponet = ({ getValues, handleAppendCategory }) => {
  const { control } = useFormContext();

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

  let rules = [
    {
      color: 'Roja',
      type: 'DANGER',
    },
    {
      color: 'Amarilla',
      type: 'WARNING',
    },
    {
      color: 'Verde',
      type: 'SUCCESS',
    },
  ];

  const handleCreateRules = (index) => {
    const rulesEdit = getValues(`categories[${index}].rules`);
    if (rulesEdit) {
      rules = rulesEdit;
    }
  };

  return (
    <>
      {fields.map((field, index) => {
        handleCreateRules(index);
        return (
          <div key={field.id} className="container_category my-3">
            <CardCategoryFormComponent
              index={index}
              rules={rules}
              remove={remove}
            />
          </div>
        );
      })}
    </>
  );
};
