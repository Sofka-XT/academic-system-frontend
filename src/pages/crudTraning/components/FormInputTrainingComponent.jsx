import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useForm from "./../../../hooks/useForm";
import CSVTableComponent from "./CSVTableComponent";
import { CSVReader } from "react-papaparse";
import { fetchPrograms } from "../../../state/crudTraining/crudTrainingActions";
import "./FormInputTrainingComponent.css";
import ProgramsListComponent from "./ProgramsListComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../../state/crudTraining/crudTrainingActions";
import { validateInputTraining } from "../../../state/crudTraining/traningValidations/validations";
import Swal from "sweetalert2";
import TraningConfirmationCreationView from "./TraningConfirmationCreationView";

const FormInputTrainingComponent = () => {
  const dispatch = useDispatch();
  const [formSent, setFormSent] = useState(false);
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
    {
      id: "0",
      name: "Seleccione al menos un coach",
    },
    {
      id: "1",
      name: "Raul Andres Alzate",
      emailAddress: "raul@gmail.com",
      phoneNumber: "32325465456",
    },
    {
      id: "2",
      name: "Pablo Armando Valencia",
      emailAddress: "pablo@gmail.com",
      phoneNumber: "3324345356",
    },
    {
      id: "3",
      name: "Oscar Mejia Restrepo",
      emailAddress: "oscar@gmail.com",
      phoneNumber: "31243544656",
    },
    ,
    {
      id: "4",
      name: "Luis Villada Monsalve",
      emailAddress: "luis@gmail.com",
      phoneNumber: "3453454353",
    },
    ,
    {
      id: "5",
      name: "Mario Castrillón Mejia",
      emailAddress: "mario@gmail.com",
      phoneNumber: "3322543565466",
    },
  ]);

  const [programs, setPrograms] = useState([]);

  const [tableState, setTableState] = useState(null);

  const { name, program, startingDate, apprentices, coaches } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actions.ADD_COACHES_LIST, payload: coaches });
    dispatch({ type: actions.ADD_TRAINING_NAME, payload: name });
    dispatch({ type: actions.SET_STARTING_DATE, payload: startingDate });
    console.log("Global state updated from submiting the form");
    const { valid, message } = validateInputTraining(formValues);
    if (valid) {
      dispatch(actions.postTraining(formValues));
      Swal.fire({
        icon: "success",
        title: "Bien hecho!",
        text: message,
        showConfirmButton: false,
        timer: 1500,
      });
      setTableState(null);

      setCoachesList([
        {
          id: "0",
          name: "Seleccione al menos un coach",
        },
        {
          id: "1",
          name: "Raul Andres Alzate",
          emailAddress: "raul@gmail.com",
          phoneNumber: "32325465456",
        },
        {
          id: "2",
          name: "Pablo Armando Valencia",
          emailAddress: "pablo@gmail.com",
          phoneNumber: "3324345356",
        },
        {
          id: "3",
          name: "Oscar Mejia Restrepo",
          emailAddress: "oscar@gmail.com",
          phoneNumber: "31243544656",
        },
        ,
        {
          id: "4",
          name: "Luis Villada Monsalve",
          emailAddress: "luis@gmail.com",
          phoneNumber: "3453454353",
        },
        ,
        {
          id: "5",
          name: "Mario Castrillón Mejia",
          emailAddress: "mario@gmail.com",
          phoneNumber: "3322543565466",
        },
      ]);

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
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleListSelectedCoaches = (e) => {};

  const handleOnDrop = (csvInfo) => {
    const data = csvInfo
      .map((item) => item.data)
      .map((infoArray) => ({
        name: infoArray[0],
        emailAddress: infoArray[1],
        phoneNumber: infoArray[2],
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

  if (!formSent) {
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
              id="submit_training"
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
                id="training_input_date"
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
                value={coachesList[0].id}
                id="training__coaches_select"
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
                      id={`${coach.id}_button_delete_coach`}
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
                  id="csv_reader_training"
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
        <ProgramsListComponent handleInputChange={handleInputChange} />
        {tableState && (
          <h2 className="section__title text-center m-5">
            Lista de estudiantes para el training
          </h2>
        )}
        <CSVTableComponent data={tableState} />
      </div>
    );
  } else {
    return <TraningConfirmationCreationView setFormSent={setFormSent} />;
  }
};

export default FormInputTrainingComponent;
