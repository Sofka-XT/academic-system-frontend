import { useFormContext } from 'react-hook-form';
import { useGradesGenerator } from '../../hooks/useGradesGenerator/useGradesGenerator';

export const AddUrlGradesComponent = ({ indexCategory }) => {
  const { setValue, getValues } = useFormContext();
  let editValues = getValues(`categories[${indexCategory}].urlsRefGradles`);
  const {
    inputRef,
    urlGrades,
    handleAddGradeToForm,
    handleRemoveGradeToForm,
    changeInputValue,
  } = useGradesGenerator(indexCategory, editValues, setValue);

  return (
    <>
      <div className="row">
        <div className="col-3 d-inline-block">
          <input
            ref={inputRef}
            placeholder="url grado"
            className="form-control "
            type="text"
            onChange={(e) => {
              changeInputValue(e.target.value);
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
                <div key={url + index} className="col-6 d-inline my-2">
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
