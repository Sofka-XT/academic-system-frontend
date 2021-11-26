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
  const { training } = useSelector((state) => state.crudTrainingReducer);

  const [formValues, handleInputChange, resetFormValues] = useForm({
    name: "",
    program: "",
    startingDate:
      new Date().getFullYear() +
      "-" +
      `${parseInt(new Date().getMonth()) + 1}` +
      "-" +
      new Date().getDate(),
    apprentices: [],
    coaches: [],
  });

  const [coachesList, setCoachesList] = useState([
    //Debemos agregar un valor por defecto que tenga id=0 y
    //que cuando se selecciona si tiene este id el coach seleccionado no se ejecute nnguna de las funciones
    {
      id: "0",
      name: "Seleccione al menos un coach",
    },
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
    ,
    {
      id: "4",
      name: "Luis",
    },
    ,
    {
      id: "5",
      name: "Mario",
    },
  ]);

  const [programs, setPrograms] = useState([]);

  const [tableState, setTableState] = useState(null);

  const { name, program, startingDate, apprentices, coaches } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    //Actualizacion de el estado global para enviar a validacion antes de afectar el back
    dispatch({ type: actions.ADD_COACHES_LIST, payload: coaches });
    dispatch({ type: actions.ADD_TRAINING_NAME, payload: name });
    dispatch({ type: actions.SET_STARTING_DATE, payload: startingDate });

    dispatch(actions.postTraining(training));
    resetFormValues();
    //ejecucion de validacion
    console.log("Global state updated from submiting the form");
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
    dispatch({ type: actions.ADD_LIST_APPRENTICES, payload: data });
    handleInputChange(e);
  };

  const handleOnError = (e) => {};

  const handleOnRemoveFile = (e) => {
    setTableState(null);
  };

  const handleSelectCoach = (e) => {
    if (e.target.value === "0") return;
    const coachSelected = coachesList.filter(
      (coach) => coach.id === e.target.value
    )[0];
    const event = {
      target: { name: "coaches", value: [...coaches, coachSelected] },
    };
    const newCoachesList = coachesList.filter(
      (coach) => coach.id !== e.target.value
    );
    setCoachesList(newCoachesList);
    handleInputChange(event);
  };

  useEffect(() => {
    fetchPrograms().then((result) => {
      dispatch({ type: actions.ADD_LIST_PROGRAMS, payload: result });
    });
  }, []);

  const handleUnselectCoach = (id) => {
    const coachToDelete = coaches.filter((coach) => coach.id === id)[0];
    const newCoachesSelected = coaches.filter((coach) => coach.id !== id);
    const event = {
      target: { name: "coaches", value: newCoachesSelected },
    };
    handleInputChange(event);
    setCoachesList([...coachesList, coachToDelete]);
  };

  return (
    <div
      className="trainings__main-container"
      style={{ paddingBottom: "50px" }}
    >
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
              onChange={handleSelectCoach}
            >
              {coachesList.map((coach) => (
                <option value={coach.id}>{coach.name}</option>
              ))}
            </select>
            <ul className="training__coach-list">
              {coaches.map((coach) => (
                <li key={coach.id} className="training__coach-selected">
                  <span> - {coach.name}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleUnselectCoach(coach.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="training__input-container">
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
      <ProgramsListComponent />
      <CSVTableComponent data={tableState} />
    </div>
  );
};

export default FormInputTrainingComponent;
