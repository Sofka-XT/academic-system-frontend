import React, { useEffect, useState } from "react";
import { CSVReader } from "react-papaparse";
import { useDispatch } from "react-redux";

import * as actions from "../../../state/crudTraining/crudTrainingActions";
import { validateInputTraining } from "../../../state/crudTraining/traningValidations/validations";
import {
  handleOnDrop,
  handleOnRemoveFile,
} from "./../../../common/csvHelpers/csvHelpers";
import {
  handleSelectCoach,
  handleUnselectCoach,
} from "./../../../common/formTrainingHelpers/formTrainingHelpers";

import useForm from "./../../../hooks/useForm";

import CSVTableComponent from "./csvTable/CSVTableComponent";
import ProgramsListComponent from "./programs/ProgramsListComponent";
import TraningConfirmationCreationView from "./../components/confirmationPage/TraningConfirmationCreationView";

import Swal from "sweetalert2";

import "./FormInputTrainingComponent.css";

const FormInputTrainingComponent = () => {
  const dispatch = useDispatch();
  const [formSent, setFormSent] = useState(false);
  const [coachesList, setCoachesList] = useState(actions.fetchCoaches());
  const [tableState, setTableState] = useState(null);

  const [formValues, handleInputChange, resetFormValues] = useForm({
    name: "",
    program: "",
    startingDate: new Date().toISOString().split("T")[0],
    apprentices: [],
    coaches: [],
  });
  const { name, startingDate, coaches } = formValues;

  const showSwalResponse = (valid, message) => {
    Swal.fire({
      icon: `${valid ? "success" : "error"}`,
      title: `${valid ? "Bien hecho!" : "Error"}`,
      text: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.UPDATE_INFO_GLOBAL_BEFORE_POSTING_TRAINING,
      payload: { coaches, name, startingDate },
    });
    const { valid, message } = validateInputTraining(formValues);
    if (valid) {
      dispatch(actions.postTraining(formValues));
      showSwalResponse(valid, message);

      setTableState(null);
      setCoachesList(actions.fetchCoaches());

      const e = {
        target: {
          name: "apprentices",
          value: [],
        },
      };
      handleInputChange(e);

      resetFormValues();
      setFormSent(true);
    } else {
      showSwalResponse(valid, message);
    }
  };

  useEffect(() => {
    actions.fetchPrograms().then((result) => {
      dispatch({ type: actions.ADD_LIST_PROGRAMS, payload: result });
    });
    // eslint-disable-next-line
  }, []);

  if (!formSent) {
    return (
      <div
        className="trainings__main-container"
        style={{ paddingBottom: "50px" }}
      >
        <form onSubmit={handleSubmit} className="trainings__form">
          <div className="training__input-form training__input-form-name">
            <input
              type="text"
              id="form-name"
              placeholder="Nombre del training ..."
              name="name"
              className="trainings__input"
              autoComplete="off"
              value={name}
              onChange={(e) => handleInputChange(e)}
            />
            <button
              type="submit"
              id="submit_training"
              onClick={handleSubmit}
              className="trainings__btn-submit"
            >
              Crear <i class="fas fa-plus ml-3"></i>
            </button>
          </div>

          <div className="training__select-form">
            <div className="training__input-container">
              <label
                htmlFor="training__starting-date"
                className="trainings__input-label"
              >
                Seleccionar coaches para el training
              </label>

              <select
                name="coaches"
                value={coachesList[0].id}
                id="training__coaches_select"
                className="trainings__select-input trainings__input-coaches"
                onChange={(e) =>
                  handleSelectCoach(
                    e,
                    setCoachesList,
                    handleInputChange,
                    coachesList,
                    coaches
                  )
                }
              >
                {coachesList.map((coach) => (
                  <option value={coach.id}>{coach.name}</option>
                ))}
              </select>
            </div>

            <div className="training__input-container">
              <label
                htmlFor="training__starting-date"
                className="trainings__input-label"
              >
                Fecha de Inicio
              </label>

              <input
                type="date"
                name="startingDate"
                id="training__starting-date"
                className="trainings__select-input"
                value={startingDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="training__output-form">
            {coaches.length > 0 ? (
              coaches.map((coach) => (
                <div key={coach.id} className="training__coach-selected">
                  <span className="text-center">{coach.name}</span>
                  <button
                    id={`${coach.id}_button_delete_coach`}
                    className="btn btn-danger btn-delete-coach"
                    onClick={() =>
                      handleUnselectCoach(
                        coach.id,
                        setCoachesList,
                        handleInputChange,
                        coachesList,
                        coaches
                      )
                    }
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))
            ) : (
              <div className="alert alert-primary text-center training__alert-primary mt-5 b-5">
                No hay coaches asignados para el training
              </div>
            )}
          </div>

          <div className="training__input-form">
            <div className="training__input-container">
              <div className="training__file-input">
                <CSVReader
                  id="csv_reader_training"
                  onDrop={(csvInfo) =>
                    handleOnDrop(
                      csvInfo,
                      setTableState,
                      dispatch,
                      handleInputChange
                    )
                  }
                  addRemoveButton
                  onRemoveFile={(e) => handleOnRemoveFile(e, setTableState)}
                >
                  <span className="training__csv-div text-center small">
                    <p>Sube aquí el archivo .CSV de los aprendices</p>
                    <button className="btn btn-primary w-6">
                      Subir Archivo <i class="fas fa-upload ml-3"></i>
                    </button>
                    <small className="mt-1">
                      (ó arrastra y suelta aquí el archivo)
                    </small>
                  </span>
                </CSVReader>
              </div>
            </div>
          </div>
        </form>
        <ProgramsListComponent handleInputChange={handleInputChange} />
        {tableState && (
          <div className="section__title text-center m-5">
            <h2>Lista de estudiantes para el training</h2>
            <div className="section__decoration"></div>
          </div>
        )}
        <CSVTableComponent data={tableState} />
      </div>
    );
  } else {
    return <TraningConfirmationCreationView setFormSent={setFormSent} />;
  }
};

export default FormInputTrainingComponent;
