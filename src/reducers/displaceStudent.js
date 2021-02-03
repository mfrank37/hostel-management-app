export default (state, action) => {
  let stud;
  try {
    // remove him/er from where s/he was
    stud = state.students.find((std) => std.id === action.student);
    const removeFrom = new Set(state.rooms.find((room) => room.students.includes(stud.name)).students);
    removeFrom.delete(stud.name);
    state.rooms.find((room) => room.students.includes(stud.name)).students = Array.from(removeFrom);
  } catch (e) {
    
  }
  // add him/er to new room
  state.students.find((std) => std.id === action.student).room = action.room;
  // take him/er to the room
  state.rooms.find((room) => room.name === action.room).students.push(stud.name);
  return state;
};
