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
