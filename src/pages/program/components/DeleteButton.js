import React from "react";
import { swalDeleteProgramConfirmAlert } from "../alerts/alerts";

export const DeleteButton = ({ dispatch, idData }) => {
  const handleOpenModal = () => {
    swalDeleteProgramConfirmAlert("Está seguro?", idData, dispatch);
  };
  return (

    <>


      <i
        className="fas fa-trash-alt icon-delete"
        onClick={() => {
          handleOpenModal();
        }}></i>
    </>
  );
};
