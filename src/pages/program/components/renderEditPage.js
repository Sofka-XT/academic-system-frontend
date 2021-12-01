export const renderEditPage = (
  program,
  handleSelect,
  courses,
  selectedCourse,
  handleAddCourse,
  DeleteButtonCourses,
  dispatch,
  InputPrograms
) => {
  if (Object.keys(program).length !== 0) {
    return (
      <div>

        <div className="card-cursos">
          <h3 >Cursos:</h3>
        </div>
        
        <div className="select-container">
          <h6>Agregar curso: </h6>
          <div>
            <select
              className="create-program-select"
              defaultValue={"DEFAULT"}
              onChange={(e) => handleSelect(e)}
            >
              <option disabled value={"DEFAULT"}>
                Seleccione un curso
              </option>
              {courses.map((course, index) => {
                return (
                  <option key={index} value={index}>
                    {course.name}
                  </option>
                );
              })}
            </select>
            {Object.keys(selectedCourse).length !== 0 && (
              <button
                className="trainings__btn-submit add-course-program"
                type="button"
                onClick={() => {
                  handleAddCourse();
                }}
              >
                Añadir curso
              </button>
            )}
          </div>
        </div>
        {program.courses &&
          program.courses.map((course) => (
            <div className="card-list" key={course.courseId}>
              <div className="bd-callout bd-callout-warning">
                <div className="course-container">
                  <h4>{course.courseName}</h4>
                  {courses.length !== 1 && (
                    <DeleteButtonCourses
                      dispatch={dispatch}
                      programId={program.id}
                      courseId={course.courseId}
                    />
                  )}
                </div>
                <div className="topics-list">
                  <h5 className="topics-label">Categorias:</h5>
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
                          currentDays={category.days}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
};
