export default (state, action) => {
  // remove him from the room
  let stud;
  if (typeof action.student === 'string') {
    state.students.find((std) => std.name === action.student).room = '';
    stud = state.students.find((std) => std.name === action.student);
  } else {
    state.students.find((std) => std.id === action.student).room = '';
    stud = state.students.find((std) => std.id === action.student);
  }
  const list = new Set(state.rooms.find((room) => room.students.includes(stud.name)).students);
  list.delete(stud.name);
  console.log(list);
  state.rooms.find((room) => room.students.includes(stud.name)).students = Array.from(list);
  console.log(stud);
  return state;
};
