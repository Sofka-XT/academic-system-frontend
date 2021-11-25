import React from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  deleteProgramByIdThunk,
  getProgramsThunk,
  getProgramByIdThunk,

} from "../../thunkAction/programThunk";
import { Card } from "./components/Card";

import "./ListOfProgramsPageComponent.css";

const ListOfProgramsPageComponent = ({
  dispatch,
  loading,
  hasErrors,
  redirect,
  programs,
}) => {
  useEffect(() => {
    dispatch(getProgramsThunk());
  }, [redirect]);

  const handleDelete = (id) => {
    dispatch(deleteProgramByIdThunk(id));
  };

  const handleEdit = (id) => {
    // console.log("editing... " + id);
    dispatch(getProgramByIdThunk(id));
  };

  const renderPrograms = () => {
    if (loading) return <p>Loading Programs...</p>;
    if (hasErrors) return <p>Unable to display Programs.</p>;
    return (
      programs &&
      programs.map((program) => (
        <Card
          key={program.id}
          name={program.name}
          id={program.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      ))
    );
  };

  return <div className="containerCards">{renderPrograms()}</div>;
};

const mapStateToProps = (state) => ({
  programs: state.programReducer.programs,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
});

export default connect(mapStateToProps)(ListOfProgramsPageComponent);
