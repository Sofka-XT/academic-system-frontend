import React from "react";

export const emailRegExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const telRegExp = RegExp(
  "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$"
);

export default validateInputTraining = ({
  apprentices,
  coaches,
  name,
  program,
  startingDate,
}) => {
  if (!validateName(name)) {
    return false;
  }
  if (!validateProgram(program)) {
    return false;
  }
  if (!validateDate(startingDate)) {
    return false;
  }
  if (!validateApprenticesList(apprentices)) {
    return false;
  }
  if (!validateCoachesList(coaches)) {
    return false;
  }
  return true;
};

//Validación del campo nombre del training
export const validateName = (name) => {
  if (!name) {
    return false;
  }
  if (name.length > 50 || name.length < 3) {
    return false;
  }

  return true;
};

//Validación del campo fecha
export const validateDate = (startingDate) => {
  if (startingDate.length < 8) {
    return false;
  }
  return true;
};

//Validación del campo coaches
export const validateCoachesList = (coaches) => {
  if (!coaches) {
    return false;
  }
  return true;
};

//Validación del campo programas
export const validateProgram = (program) => {
  if (program.length < 3) {
    return false;
  }
  return true;
};

//Validacion del campo aprendices
export const validateApprenticesList = (apprentices) => {
  apprentices.foreach((apprentice) => {
    if (
      apprentice.name === null ||
      apprentice.name.length < 3 ||
      apprentice.name.length > 50 ||
      apprentice.phoneNumber.length < 7 ||
      apprentice.emailAddress.length < 8 ||
      apprentice.emailAddress == emailRegExp.test(value)
    ) {
      return false;
    }
    return true;
  });
};
