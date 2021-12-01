export const handleSelectCoach = (
  e,
  setCoachesList,
  handleInputChange,
  coachesList,
  coaches
) => {
  if (e.target.value === "0") return;

  const coachSelected = coachesList.filter(
    (coach) => coach.id === e.target.value
  )[0];
  const event = {
    target: { name: "coaches", value: [...coaches, coachSelected] },
  };
  const newCoachesList = coachesList.filter(
    (coach) => coach.id !== e.target.value
  );

  setCoachesList(newCoachesList);
  handleInputChange(event);
};

export const handleUnselectCoach = (
  id,
  setCoachesList,
  handleInputChange,
  coachesList,
  coaches
) => {
  const coachToDelete = coaches.filter((coach) => coach.id === id)[0];
  const newCoachesSelected = coaches.filter((coach) => coach.id !== id);
  const event = {
    target: { name: "coaches", value: newCoachesSelected },
  };
  handleInputChange(event);
  setCoachesList([...coachesList, coachToDelete]);
};

export const createCalendar = (formValues, programSelected) => {
  const categories = []; 
  programSelected.courses.map(course => course.categories.map((category) => 
    categories.push({categoryId: category.categoryId,
                     courseId: course.courseId,
                     duration: category.days})));
                     console.log(categories)
  //const map = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'vale3']]
  //lunes = 2, martes=3, miercoles=4, jueves=5, viernes=6, sabado=0, domingo=1
  const calendar = new Map();
  const startingDate = new Date(formValues.startingDate);
  for(let n = 0; n < categories.length; n++) {
      for(let i = categories[n].days; i > 0; i--){
        let day = startingDate.getDay();
        if(day === 0){
          startingDate.setDate(startingDate.getDate() + 2);
          i++;
        }else if(day === 1){
          startingDate.setDate(startingDate.getDate() + 1);
          i++;
        }else{
          calendar.set(startingDate.toISOString().split('T')[0],
          calendar.get(startingDate.toISOString().split('T')[0]).push(categories[n]));
          startingDate.setDate(startingDate.getDate() + 1);
        }
      }
  }
  console.log('calendario creado:')
  console.log(calendar)

};


