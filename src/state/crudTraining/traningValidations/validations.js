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

//Validacion de correo

//Validacion de telefono
if (!pattern.test(input["Telefono"])) {
  isValid = false;
  errors["Telefono"] = "Por favor ingrese solo el número";
} else if (input["Telefono"].length != 10) {
  isValid = false;
  errors["phone"] = "Ingrese un número de teléfono válido.";
}
