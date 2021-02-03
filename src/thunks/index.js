import { ADD_STUDENT_TO_ROOM, UNPLACE_STUDENT } from "../actions";

export const placeStudent = (dispatch, target, name) => {
  return dispatch({
    type: ADD_STUDENT_TO_ROOM,
    room: name,
    student: target.innerHTML
  });
};

export const removeStudents = (dispatch, target) => {
  return dispatch({
    type: UNPLACE_STUDENT,
    student: target.innerHTML
  });
};