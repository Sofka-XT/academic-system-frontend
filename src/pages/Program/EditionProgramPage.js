import { updateProgramThunk } from "../../thunkAction/programThunk";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { EditForm } from "./components/EditForm";

const EditionProgramPage = ({ program, dispatch, loading, hasErrors, redirect }) => {
  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Program Courses.</p>;
  const copyProgram = {...program}

  const handleOnClick = () => {
    console.log("En la editionProgramPage button")
    console.log(program.courses)
    updateProgramThunk(copyProgram);
  };

  const renderEditPage = () => {
    const courses = copyProgram.courses;
    console.log(copyProgram);
    

    return courses.map((course) => (
      <EditForm key={course.id} course={course} program={copyProgram} />
    ));
  };

  return (
    <div>
      <form>
        <h1> Editar Programa </h1>
        <div>
          <label> Nombre del programa: </label>
          <input value={program.name}></input>
          <div>{renderEditPage()}</div>
        </div>
          <button type="submit" onClick={handleOnClick}>
            Enviar
          </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect
});

export default connect(mapStateToProps)(EditionProgramPage);
