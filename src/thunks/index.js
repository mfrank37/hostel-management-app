import { ADD_STUDENT_TO_ROOM, DISPLACE_STUDENT, UNPLACE_STUDENT } from "../actions";

export const placeStudent = (dispatch, target, name) => {
  // you can do async fns / promises
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

export const unplaceStudent = (dispatch, target) => {
  return dispatch({
    type: UNPLACE_STUDENT,
    student: parseInt(target.getAttribute('data-student'))
  });
};

export const displaceStudent = (dispatch, target) => {
  return dispatch({
    type: DISPLACE_STUDENT,
    student: parseInt(target.getAttribute('data-student')),
    room: target.value
  });
};
