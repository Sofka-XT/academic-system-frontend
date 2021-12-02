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

export const getProgramTotalDuration = (program) =>
  program.courses
    .map((course) =>
      course.categories
        .map((category) => category.days)
        .reduce((previousValue, currentValue) => previousValue + currentValue)
    )
    .reduce((previousValue, currentValue) => previousValue + currentValue);
