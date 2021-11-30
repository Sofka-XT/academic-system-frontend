import * as actions from "./../../state/crudTraining/crudTrainingActions";

export const handleOnDrop = (
  csvInfo,
  setTableState,
  dispatch,
  handleInputChange
) => {
  const data = csvInfo
    .map((item) => item.data)
    .map((infoArray) => ({
      name: infoArray[0],
      emailAddress: infoArray[1],
      phoneNumber: infoArray[2],
    }));
  setTableState(data);
  const e = {
    target: {
      name: "apprentices",
      value: data,
    },
  };

  dispatch({ type: actions.ADD_LIST_APPRENTICES, payload: data });
  handleInputChange(e);
};
