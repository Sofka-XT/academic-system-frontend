export const EditForm = ({ course }) => {
  const categories = course.categories;
  console.log(course);
  console.log(categories);
  return (
    <div>
      <label>Curso</label>
      <h3>{course.courseName}</h3>
      <div>
        <label>Temas</label>
        <ul>
          {categories.map((category) => (
            <div>
              <li>{category.categoryName}</li>
              <input value={category.days}></input>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
