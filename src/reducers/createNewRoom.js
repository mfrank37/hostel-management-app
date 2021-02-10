const createNewRoom = (state, action) => {
  let roomNumber;
  const newRoom = {};
  switch (action.size) {
    case 1:
      roomNumber = state.roomTypes[0].rooms.length + 1;
      newRoom.name = 'A'+ roomNumber;
      newRoom.id = state.rooms.length + 1;
      state.roomTypes[0].rooms.push(newRoom.id);
      newRoom.beds = 1;
      break;
    case 2:
      roomNumber = state.roomTypes[1].rooms.length + 1;
      newRoom.name = 'B'+ roomNumber;
      newRoom.id = state.rooms.length + 1;
      state.roomTypes[1].rooms.push(newRoom.id);
      newRoom.beds = 2;
      break;
    default:
      roomNumber = state.roomTypes[2].rooms.length + 1;
      newRoom.name = 'C'+ roomNumber;
      newRoom.id = state.rooms.length + 1;
      state.roomTypes[2].rooms.push(newRoom.id);
      newRoom.beds = 4;
  };
  newRoom.students = [];
  state.rooms.push(newRoom);
  return state;
};

export default createNewRoom;
