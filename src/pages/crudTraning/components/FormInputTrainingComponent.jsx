import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./../../../hooks/useForm";
import CSVTableComponent from "./CSVTableComponent";
import { CSVReader } from "react-papaparse";
import { fetchPrograms } from "../../../state/crudTraining/crudTrainingActions";

import "./FormInputTrainingComponent.css";
import ProgramsListComponent from "./ProgramsListComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../../state/crudTraining/crudTrainingActions";

const FormInputTrainingComponent = () => {
  const dispatch = useDispatch();
  const trainingState = useSelector((state) => state.crudTrainingReducer);

  const [formValues, handleInputChange, resetFormValues] = useForm({
    name: "",
    program: "",
    startingDate: Date.now(),
    apprentices: [],
    coaches: [],
  });

  const [coachesList, setCoachesList] = useState([
    {
      id: "1",
      name: "Raul",
    },
    {
      id: "2",
      name: "Pablo",
    },
    {
      id: "3",
      name: "Oscar",
    },
  ]);

  const [programs, setPrograms] = useState([]);

  const [tableState, setTableState] = useState(null);

  const { name, program, startingDate, apprentices, coaches } = formValues;
  console.log(startingDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startLoginEmailAndPassword(email, password));
  };

  const handleListSelectedCoaches = (e) => {
    //pendeinte
  };

  const handleOnDrop = (csvInfo) => {
    const data = csvInfo
      .map((item) => item.data)
      .map((infoArray) => ({
        name: infoArray[0],
        email: infoArray[1],
        tel: infoArray[2],
      }));
    setTableState(data);
    const e = {
      target: {
        name: "apprentices",
        value: data,
      },
    };
    handleInputChange(e);
  };

  const handleOnError = (e) => {};

  const handleOnRemoveFile = (e) => {
    setTableState(null);
  };

  useEffect(() => {
    fetchPrograms().then((result) => {
      const programs = result.map((program) => ({
        ...program,
        selected: false,
      }));
      //dispatch({ type: actions.ADD_LIST_PROGRAMS, payload: programs });
    });
    //console.log("estamos en el useefect");
  }, []);

  return (
    <div className="trainings__main-container mb-3">
      <form onSubmit={handleSubmit} className="trainings__form">
        <div className="training__input-form">
          <input
            type="text"
            id="form-name"
            placeholder="Nombre del training ..."
            name="name"
            className="trainings__input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="trainings__btn-submit"
          >
            Crear
          </button>
        </div>

        <div className="training__input-form">
          <div className="training__input-container">
            <label
              htmlFor="training__categoria"
              className="trainings__input-label"
            >
              Categoría del programa
            </label>

            <select
              name="program"
              id="training__categoria"
              className="trainings__select-input"
              value={program}
              onChange={handleListSelectedCoaches}
            >
              {trainingState.programs.map((program) => (
                <option value={program.id}>{program.name}</option>
              ))}
            </select>
          </div>

          <div className="training__input-container">
            <label
              htmlFor="training__categoria"
              className="trainings__input-label"
            >
              Fecha de Inicio
            </label>

            <input
              type="date"
              name="startingDate"
              className="trainings__select-input trainings__date-input"
              value={startingDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="training__input-form">
          <div className="training__input-container">
            <label
              htmlFor="training__categoria"
              className="trainings__input-label"
            >
              Seleccionar coaches para el training
            </label>

            <select
              name="coaches"
              id="training__couches"
              className="trainings__select-input"
              onChange={handleInputChange}
            >
              {coachesList.map((coach) => (
                <option value={coach.id}>{coach.name}</option>
              ))}
            </select>
            <ul className="training__coach-list">
              {coaches.map((coach) => (
                <li key={coach.id} className="training__coach-selected">
                  <span> - {coach.name}</span>
                  <button className="btn btn-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="training__input-container">
            {/* <label
              htmlFor="training__categoria"
              className="trainings__input-label"
            >
              Subir archivo de aprendices
            </label> */}

            <div className="training__file-input">
              <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
              >
                <span className="text-center small">
                  Subir el archivo .CSV de los aprendices para el nuevo
                  trainings
                </span>
              </CSVReader>
            </div>
          </div>
        </div>
      </form>
      <ProgramsListComponent programs={programs} />
      <CSVTableComponent data={tableState} />
    </div>
  );
};

export default FormInputTrainingComponent;
