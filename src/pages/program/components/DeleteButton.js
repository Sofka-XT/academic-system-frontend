import React from "react";
import { swalDeleteProgramConfirmAlert } from "../alerts/alerts";

export const DeleteButton = ({ dispatch, idData }) => {
  const handleOpenModal = () => {
    swalDeleteProgramConfirmAlert("Está seguro?", idData, dispatch);
  };
  return (
    <button
      type="button"
      className="button-delete"
      onClick={() => {
        handleOpenModal();
      }}
    >
      Delete
    </button>
  );
};
