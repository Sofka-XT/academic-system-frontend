import validator from 'validator';

export const emailRegExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const telRegExp = RegExp(
  '^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$'
);

export const validateInputTraining = ({
  apprentices,
  coaches,
  name,
  program,
  startingDate,
}) => {
  if (!validateName(name)) {
    return {
      valid: false,
      message: 'El nombre del training es incorrecto, intente nuevamente.',
    };
  }
  if (!validateProgram(program)) {
    return {
      valid: false,
      message: 'El programa del training no fue definido, intente nuevamente.',
    };
  }
  if (!validateDate(startingDate)) {
    return {
      valid: false,
      message:
        'La fecha de inicio del training es incorrecta, intente nuevamente.',
    };
  }
  if (!validateCoachesList(coaches)) {
    return {
      valid: false,
      message:
        'El training debe tener asignado al menos un coach, intente nuevamente.',
    };
  }
  if (!validateApprenticesList(apprentices)) {
    return {
      valid: false,
      message:
        'El training debe tener su lista de aprendices, intente nuevamente.',
    };
  }

  return {
    valid: true,
    message: 'El training se ha creado exitosamente.',
  };
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

//Validación del campo programas
export const validateProgram = (program) => {
  if (program.length < 3) {
    return false;
  }
  return true;
};

//Validación del campo fecha
export const validateDate = (startingDate) => {
  if (!validator.isDate(startingDate)) {
    return false;
  }
  return true;
};

//Validación del campo coaches
export const validateCoachesList = (coaches) => {
  return coaches.length > 0 ? true : false;
};

//Validacion del campo aprendices
export const validateApprenticesList = (apprentices) => {
  // eslint-disable-next-line array-callback-return
  if(apprentices.length === 0 ) return false;
  const validated = true;
  apprentices.forEach((apprentice) => {
    if (
      apprentice.name === null ||
      apprentice.name.length < 3 ||
      apprentice.name.length > 50 ||
      apprentice.phoneNumber.length < 7 ||
      apprentice.emailAddress.length < 8
    ) {
      validated = false;
    }
  });
  return validated;
};
