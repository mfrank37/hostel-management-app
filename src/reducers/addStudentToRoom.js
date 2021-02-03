export default (state, action) => {
  let stud;
  try {
    stud = state.students.find((std) => std.name === action.student);
    const removeFrom = new Set(state.rooms.find((room) => room.students.includes(stud.name)).students);
    console.log(removeFrom);
    removeFrom.delete(stud.name);
    state.rooms.find((room) => room.students.includes(stud.name)).students = Array.from(removeFrom);
  } catch (e) {

  }
  stud.room = action.room;
  state.rooms.find(room => room.name === action.room).students.push(stud.name);
  state.students = state.students.map(STD => STD.id === stud.id ? stud : STD);
  return state;
};
