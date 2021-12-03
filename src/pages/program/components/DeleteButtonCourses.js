import React from "react";

import { swalDeleteCourseConfirmAlert } from "../alerts/alerts";
import "../ListOfProgramsPageComponent.css";

export const DeleteButtonCourses = ({ dispatch, programId, courseId }) => {
  const handleOpenModal = () => {
    swalDeleteCourseConfirmAlert(programId, courseId, "Esta Seguro?", dispatch);
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
