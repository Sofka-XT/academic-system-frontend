import { AddCourseToCurrentProgram } from "../../../state/Program/programAction";
import {
  swalCreateConfirmAlert,
  swalEditConfirmAlert,
  swalErrorAlert,
  swalWarningAlert,
} from "./alerts";

export const triggerALertRepitedCourse = (
  program,
  dispatch,
  selectedCourse
) => {
  let data = {
    courseId: selectedCourse.id,
    courseName: selectedCourse.name,
    categories: selectedCourse.categories.map((category) => {
      return {
        categoryId: category.id,
        categoryName: category.name,
        urlsRefGradles: category.urlsRefGradles,
        days: 1,
      };
    }),
  };

  let isEqualValue = false;

  program.courses.forEach((course) => {
    if (course.courseId === selectedCourse.id) {
      isEqualValue = true;
    }
  });

  if (isEqualValue) {
    swalErrorAlert("Ya existe este curso");
    return;
  }

  dispatch(AddCourseToCurrentProgram(data));
};

export const triggerALertRepitedProgram = (
  programs,
  program,
  dispatch,
  navigate,
  isEdit
) => {
  let isEqualProgram = false;

  programs.forEach((p) => {
    if (
      p.name.toLowerCase() === program.name.toLowerCase() &&
      p.id !== program.id
    ) {
      isEqualProgram = true;
    }
  });

  if (isEqualProgram) {
    swalWarningAlert(`Ya existe un programa llamado ${program.name}`);
    return;
  }

  if (isEdit) {
    swalEditConfirmAlert(
      "¿Quiere editar este programa?",
      program,
      dispatch,
      navigate
    );
    return;
  }

  swalCreateConfirmAlert(
    "¿Quiere crear este programa?",
    program,
    dispatch,
    navigate
  );
};
