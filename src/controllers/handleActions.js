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
      if(typeof action.student === 'string') {
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
      return {
        students: state.students,
        rooms: state.rooms
      }
    case 'ADD_STUDENT_TO_ROOM':
      try {
        stud = state.students.find((std) => std.name === action.student);
        const removeFrom = new Set(state.rooms.find((room) => room.students.includes(stud.name)).students);
        console.log(removeFrom);
        removeFrom.delete(stud.name);
        state.rooms.find((room) => room.students.includes(stud.name)).students = Array.from(removeFrom);
      } catch (e) {

      }
      stud.room = action.room;
      state.rooms.find(room=> room.name === action.room).students.push(stud.name);
      state.students = state.students.map(STD=> STD.id === stud.id ? stud : STD);
      return {
        students: state.students,
        rooms: state.rooms
      }
    default:
      return state;
  }
};
