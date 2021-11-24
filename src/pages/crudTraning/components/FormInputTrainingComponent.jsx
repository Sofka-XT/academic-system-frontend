import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./../../../hooks/useForm";
import CSVTableComponent from "./CSVTableComponent";
import { CSVReader } from 'react-papaparse'

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

  const [tableState, setTableState] = useState(null);

  const { name, program, startingDate, apprentices, coaches } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startLoginEmailAndPassword(email, password));
  };


  const handleOnDrop = (e) => {
    console.log("handleOnDrop")
    console.log(e)
  }

  const handleOnError = (e) => {
    console.log("handleOnError")
    console.log(e);
  }

  const handleOnRemoveFile = (e) => {
    console.log("handleOnRemoveFile")
    console.log(e)
  }


  const handleUploadFile = (e) => {
    inputFileRef.current.click();
    // console.log(inputFile);
  };

  const handleInputFileChange = (e) => {
    // console.log(e.target.value);
    
  };

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
              onChange={handleInputChange}
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
              <option value="1" className="training__options-coachs">
                Raul
              </option>
              <option value="2" className="training__options-coachs">
                Oscar
              </option>
              <option value="3" className="training__options-coachs">
                Pablo
              </option>
              <option value="4" className="training__options-coachs">
                Ivan
              </option>
              <option value="5" className="training__options-coachs">
                Manuel
              </option>
            </select>
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
