import { updateProgramThunk } from "../../thunkAction/programThunk";
import { connect } from "react-redux";
import { EditForm } from "./components/EditForm";

const EditionProgramPage = ({ program, dispatch, loading, hasErrors, redirect }) => {
  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Program Courses.</p>;

  const copyProgram = {...program}

  const handleOnClick = (id) => {
    console.log(copyProgram)
  };

  const renderEditPage = () => {
    const courses = copyProgram.courses;
    
    return(courses && courses.map((course) => (
      <EditForm dispatch={dispatch} key={course.courseId} course={course} program={copyProgram}/>
    )));
  };

  return (
    <div>
      <form>
        <h1> Editar Programa </h1>
        <div>
          <label> Nombre del programa: </label>
          <label value={program.name}></label>
          <div>{renderEditPage()}</div>
        </div>
          <button type="submit" onClick={() => handleOnClick(program.id)}>
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
