import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const resetFormValues = () => {
    setFormValues(initialState);
  };
  return [formValues, handleInputChange, resetFormValues];
};

export default useForm;
