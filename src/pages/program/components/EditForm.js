import { CategoriesListProgram } from "./CategoriesListProgram";

export const EditForm = ({ course, program }) => {
  const categories = course.categories;

  return (
    <div>
      <label>Curso</label>
      <h3>{course.courseName}</h3>
      <div>
        <label>Temas</label>
        <ul>
          {categories.map((category) => (
            <CategoriesListProgram
              key={categories.categoryId}
              categories={categories}
              category={category}
              program={program}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
