import { useState, useRef, useEffect } from 'react';

export const useGradesGenerator = (indexCategory, editValue, setValue) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [urlGrades, setUrlGrades] = useState(editValue || []);

  useEffect(() => {
    if (urlGrades.length > 0) {
      setValue(`categories[${indexCategory}].urlsRefGradles`, urlGrades);
    }
  }, [indexCategory, setValue, urlGrades, setInputValue]);
  const handleAddGradeToForm = () => {
    if (inputValue.length < 1) {
      return;
    }
    inputRef.current.value = '';
    setInputValue('');
    setUrlGrades([...urlGrades, inputValue]);
  };
  const handleRemoveGradeToForm = (index) => {
    const temUrlGrade = urlGrades.filter((url, index2) => index2 !== index);
    setUrlGrades(temUrlGrade);
  };
  const changeInputValue = (value) => setInputValue(value);
  return {
    handleAddGradeToForm,
    handleRemoveGradeToForm,
    inputRef,
    changeInputValue,
    urlGrades,
  };
};
