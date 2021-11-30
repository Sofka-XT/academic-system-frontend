import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const AddUrlGradesComponent = ({ indexCategory }) => {
  const [inputValue, setInputValue] = useState();
  const [urlGrades, setUrlGrades] = useState([]);
  const { setValue } = useFormContext();
  useEffect(() => {
    if (urlGrades.length > 0) {
      setValue(`categories[${indexCategory}].urlRefGrades`, urlGrades);
    }
  }, [indexCategory, setValue, urlGrades]);
  const handleAddGradeToForm = () => {
    setUrlGrades([...urlGrades, inputValue]);
  };
  const handleRemoveGradeToForm = (index) => {
    const temUrlGrade = urlGrades.filter((url, index2) => index2 !== index);
    setUrlGrades(temUrlGrade);
  };

  return (
    <>
      <div className="row">
        <div className="col-3 d-inline-block">
          <input
            placeholder="url grado"
            className="form-control "
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="form-control btn-success"
            type="button"
            onClick={() => {
              handleAddGradeToForm();
            }}
          >
            +
          </button>
        </div>
        <div className="col-9">
          {urlGrades &&
            urlGrades.map((url, index) => {
              return (
                <div className="col-6 d-inline my-2">
                  <span className="mx-1 p-1 " key={url + index}>
                    {url}
                  </span>
                  <button
                    className=" btn-danger"
                    type="button"
                    onClick={() => {
                      handleRemoveGradeToForm(index);
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
