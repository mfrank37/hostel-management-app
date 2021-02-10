import { ADD_NEW_ROOM, ADD_NEW_STUDENT, ADD_STUDENT_TO_ROOM, DISPLACE_STUDENT, DELETE_STUDENT, UNPLACE_STUDENT } from "../actions";

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

export const addNewRoom = (size) => {
  return {
    type: ADD_NEW_ROOM,
    size: parseInt(size)
  }
};

export const addNewStudent = (name) => {
  return {
    type: ADD_NEW_STUDENT,
    name: name
  }
};

export const deleteStudent = (target) => {
  return {
    type: DELETE_STUDENT,
    studentId: parseInt(target.getAttribute('data-id'))
  }
};
