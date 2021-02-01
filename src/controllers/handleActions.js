import { rooms } from "../data";

export default function handleActions(state, action) {
  let stud;
  switch (action.type) {
    case 'DISPLACE_STUDENT':
      // remove him/er from where s/he was
      try {
        stud = state.students.find((std) => std.id === action.student);
        const removeFrom = new Set(rooms.find((room) => room.students.includes(stud.name)).students);
        console.log(removeFrom);
        removeFrom.delete(stud.name);
        state.rooms.find((room) => room.students.includes(stud.name)).students = Array.from(removeFrom);
      } catch (e) {

      }
      // add him/er to new room
      state.students.find((std) => std.id === action.student).room = action.room;
      // take him/er to the room
      rooms.find((room) => room.name === action.room).students.push(stud.name);
      return {
        students: state.students,
        rooms: state.rooms
      }
      case 'UNPLACE_STUDENT':
        // remove him from the room
        state.students.find((std) => std.id === action.student).room = '';
        stud = state.students.find((std) => std.id === action.student);
        const list = new Set(rooms.find((room) => room.students.includes(stud.name)).students);
        console.log(list);
        list.delete(stud.name);
        rooms.find((room) => room.students.includes(stud.name)).students = Array.from(list);
        console.log(stud);
        return {
          students: state.students,
          rooms: state.rooms
        }
        default:
          return state;
  }
}