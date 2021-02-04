import { ADD_STUDENT_TO_ROOM, DISPLACE_STUDENT, UNPLACE_STUDENT } from "../actions";

export const placeStudent = (target, name) => {
  // you can do async fns / promises
  return {
    type: ADD_STUDENT_TO_ROOM,
    room: name,
    student: target.innerHTML
  }
};

export const removeStudents = (target) => {
  return {
    type: UNPLACE_STUDENT,
    student: target.innerHTML
  }
};

export const unplaceStudent = (target) => {
  return {
    type: UNPLACE_STUDENT,
    student: parseInt(target.getAttribute('data-student'))
  }
};

export const displaceStudent = (target) => {
  return {
    type: DISPLACE_STUDENT,
    student: parseInt(target.getAttribute('data-student')),
    room: target.value
  }
};
