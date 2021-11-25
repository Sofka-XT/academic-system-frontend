import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./../../../hooks/useForm";
import CSVTableComponent from "./CSVTableComponent";
import { CSVReader } from "react-papaparse";
import {fetchPrograms} from '../../../state/crudTraining/crudTrainingActions'

import "./FormInputTrainingComponent.css";

const LoginScreen = () => {
  const inputFileRef = useRef(document.getElementById("btn__upload-file"));

  // const dispatch = useDispatch();
  // const { ui } = useSelector((state) => state);
  const [formValues, handleInputChange, resetFormValues] = useForm({
    name: "",
    program: "",
    startingDate: new Date(),
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

  const [tableState, setTableState] = useState(null);

  const { name, program, startingDate, apprentices, coaches } = formValues;

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
    console.log(data);
    setTableState(data);
  };

  const handleOnError = (e) => {};

  const handleOnRemoveFile = (e) => {
    setTableState(null);
  };

  useEffect(() => {
    fetchPrograms().then(result => {
      console.log(result);
    });
    console.log("estamos en el useefect")
  }, [])

  return (
    <div className="trainings__main-container">
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
              <option value="1" className="training__options-programs">
                Desarrollo
              </option>
              <option value="2" className="training__options-programs">
                QA
              </option>
              <option value="3" className="training__options-programs">
                SCRUM
              </option>
              <option value="4" className="training__options-programs">
                Arquitectura
              </option>
              <option value="5" className="training__options-programs">
                Otro
              </option>
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
            <label
              htmlFor="training__categoria"
              className="trainings__input-label"
            >
              Subir archivo de aprendices
            </label>

            <div className="training__file-input">
              <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
              >
                <span>Click to upload.</span>
              </CSVReader>
            </div>
          </div>
        </div>
      </form>
      <CSVTableComponent data={tableState} />
    </div>
  );
};

export default LoginScreen;

/*

<div className="auth__container">
      <div className="text-center d-block">
        <h5>
          <img
            src={process.env.PUBLIC_URL + "/assets/login-logo.png"}
            className="hola"
            alt="hola"
          />
          <p className="bold mt-2 mb-5">Signin to create memories!</p>
        </h5>
      </div>

      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="form-name"
          placeholder="Nombre del training"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <select
          name="programId"
          id=""
          value={programId}
          onChange={handleInputChange}
        >
          <option value="1" className="auth__training-options">
            Desarrollo
          </option>
          <option value="2" className="auth__training-options">
            QA
          </option>
          <option value="3" className="auth__training-options">
            SCRUM
          </option>
          <option value="4" className="auth__training-options">
            Arquitectura
          </option>
          <option value="5" className="auth__training-options">
            Otro
          </option>
        </select>

        <input
          type="date"
          name="startingDate"
          className="auth__input"
          value={startingDate}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
*/
