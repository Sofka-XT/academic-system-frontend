const createCalendar = (formValues, programSelected) => {
  const categories = [];
  programSelected.courses.map((course) =>
    course.categories.map((category) =>
      categories.push({
        categoryId: category.categoryId,
        courseId: course.courseId,
        duration: category.days,
        categoryURL: category.urlsRefGradles,
      })
    )
  );
  //const map = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'vale3']]
  //lunes = 2, martes=3, miercoles=4, jueves=5, viernes=6, sabado=0, domingo=1
  const calendar = {};
  const startingDate = new Date(formValues.startingDate);

  for (let n = 0; n < categories.length; n++) {
    for (let i = categories[n].duration; i > 0; i--) {
      let day = startingDate.getDay();
      if (day === 5) {
        startingDate.setDate(startingDate.getDate() + 2);

        i++;
      } else if (day === 6) {
        startingDate.setDate(startingDate.getDate() + 1);
        i++;
      } else {
        const property = startingDate.toISOString().split("T")[0];
        if (calendar.hasOwnProperty(property)) {
          calendar[property] = [...calendar[property], categories[n]];
        } else {
          calendar[property] = [categories[n]];
        }
        if (i === 1) {
          let startingDateToGrade = new Date(property);
          startingDateToGrade.setDate(startingDateToGrade.getDate() + 1);
          for (let y = 0; y < 8; y++) {
            let dayGrade = startingDateToGrade.getDay();
            if (dayGrade === 5) {
              startingDateToGrade.setDate(startingDateToGrade.getDate() + 2);
              y--;
            } else if (dayGrade === 6) {
              startingDateToGrade.setDate(startingDateToGrade.getDate() + 1);
              y--;
            } else {
              const propertyGrading = startingDateToGrade
                .toISOString()
                .split("T")[0];
              if (calendar.hasOwnProperty(propertyGrading)) {
                calendar[propertyGrading] = [
                  ...calendar[propertyGrading],
                  categories[n],
                ];
              } else {
                calendar[propertyGrading] = [categories[n]];
              }
              startingDateToGrade.setDate(startingDateToGrade.getDate() + 1);
            }
          }
        }
        startingDate.setDate(startingDate.getDate() + 1);
      }
    }
  }
  const trainingToReturn = {
    name: formValues.name,
    program: formValues.program,
    startingDate: formValues.startingDate,
    apprentices: formValues.apprentices,
    coaches: formValues.coaches,
    categoriesToScrapCalendar: calendar,
  };
  return trainingToReturn;
};

export default createCalendar;
