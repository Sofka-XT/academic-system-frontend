import { connect } from "react-redux";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
import { updateProgramThunk } from "../../thunkAction/programThunk";
import { InputPrograms } from "./components/InputPrograms";




const EditionProgramPage = ({
  dispatch,
  program,
  loading,
  hasErrors,
  programs
}) => {

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Show Program.</p>;

  const handleOnClick = (id) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: "¿Quiere editar este program?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Editalo!",
    }).then((itemToEdit) => {
      if (itemToEdit) {
        MySwal.fire({
          text: "El programa ha sido editado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(updateProgramThunk(program));
      }
    });
  };

  const handleDeleteCourse = (programId, courseId) => {
    console.log("deleting..." + programId + " " + courseId);
  };

  const renderEditPage = () => {
    if (Object.keys(program).length !== 0) {
      const courses = program.courses;
      return (
        courses &&
        courses.map((course) => (
          <div key={course.courseId}>
            <label>Curso</label>
            <h3>{course.courseName}</h3>

            <button
              onClick={() => {
                handleDeleteCourse(program.id, course.courseId);
              }}
            >
              Eliminar
            </button>
            <div>
              <label>Temas</label>
              <ul>
                {course.categories &&
                  course.categories.map((category) => (
                    <InputPrograms
                      key={category.categoryId}
                      categoryId={category.categoryId}
                      category={category}
                      courseId={course.courseId}
                      programId={program.id}
                      dispatch={dispatch}
                    />
                  ))}
              </ul>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <div>
      <form>
        <h1> Editar Programa </h1>
        <div className="program-name-container">
          <h2 className="program-name"> Nombre del programa: </h2>
          <input className="" value={program.name}></input>
          <div>{renderEditPage()}</div>
        </div>
        <button onClick={() => handleOnClick(program.id)}>Enviar</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  programs: state.programReducer.programs,
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
});

export default connect(mapStateToProps)(EditionProgramPage);
