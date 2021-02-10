const deleteStudent = (state, action) => {
  const removed = state.students.find(std => std.id === action.studentId);
  try{
    const currentRoom = state.rooms.find(room => room.students.includes(removed.name));
    state.rooms = state.rooms.filter(room => room.name != currentRoom.name);
    const set = new Set(currentRoom.students);
    set.delete(removed.name);
    currentRoom.students = Array.from(set);
    state.rooms.push(currentRoom);
  } catch(e) {

  }
  state.students = state.students.filter(std => std.id != action.studentId);
  return state;
};

export default deleteStudent;
