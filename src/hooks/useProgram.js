import { useEffect } from "react";
import {
  updateCurrentProgram,
  updateTotalDays,
} from "../state/Program/programAction";

export const useProgramTotalDays = (program, dispatch) => {
  useEffect(() => {
    if (program.courses) {
      let sumDays = 0;
      program.courses.map((course) => {
        if (course.categories) {
          course.categories.map((category) => {
            sumDays += parseInt(category.days);
            return null;
          });
        }
        return null;
      });

      let data = {
        totalDays: sumDays,
      };

      dispatch(updateTotalDays(data));
    }
  }, [program, dispatch]);
};

export const useProgramUpddateCurrentProgram = (dispatch) => {
  useEffect(() => {
    let data = {
      program: {
        name: "",
        courses: [],
      },
    };

    dispatch(updateCurrentProgram(data));
    // eslint-disable-next-line
  }, [dispatch]);
};

export const useProgramEffectForActions = (action, dispatch) => {
  useEffect(() => {
    dispatch(action);
    // eslint-disable-next-line
  }, [dispatch]);

}