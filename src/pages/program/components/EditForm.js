import { CategoriesListProgram } from "./CategoriesListProgram";

export const EditForm = ({ course, program, dispatch }) => {
  const categories = course.categories;

  return (
    <div>
      <label>Curso</label>
      <h3>{course.courseName}</h3>
      <div>
        <label>Temas</label>
        <ul>
          {categories && 
            categories.map((category) => (
              <CategoriesListProgram
                key={category.categoryId}
                categories={categories}
                category={category}
                program={program}
                dispatch={dispatch}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};
