export const students = [
  {id: 1,  name: 'Frank',   room: 'A1'},
  {id: 2,  name: 'Marry',   room: 'B1'},
  {id: 3,  name: 'Max',     room: ''  },
  {id: 4,  name: 'Thunder', room: 'B2'},
  {id: 5,  name: 'Tom',     room: 'B2'},
  {id: 6,  name: 'Jerry',   room: 'C1'},
  {id: 7,  name: 'Harry',   room: 'C1'},
  {id: 8,  name: 'Riyuk',   room: 'C2'},
  {id: 9,  name: 'Wendy',   room: 'C2'},
  {id:10,  name: 'Ammy',    room: 'C2'},
  {id:11,  name: 'Persie',  room: 'C2'},
  {id:12,  name: 'Robin',   room: 'C2'},
  {id:13,  name: 'Cedro',   room: ''  },
  {id:14,  name: 'Paul',    room: ''  },
  {id:15,  name: 'Kelly',   room: ''  },
  {id:16,  name: 'Linda',   room: ''  },
  {id: 17, name: 'Zoe',     room: ''  }
];

export const roomSizes = Object.freeze({
  A: 1,
  B: 2,
  C: 4
});

export const rooms = [{
    id: 1,
    name: 'A1',
    beds: roomSizes.A,
    students: [students[0].name]
  },
  {
    id: 2,
    name: 'A2',
    beds: roomSizes.A,
    students: []
  },
  {
    id: 3,
    name: 'B1',
    beds: roomSizes.B,
    students: [students[1].name]
  },
  {
    id: 4,
    name: 'B2',
    beds: roomSizes.B,
    students: [students[3].name, students[4].name, students[5].name]
  },
  {
    id: 5,
    name: 'C1',
    beds: roomSizes.C,
    students: [students[6].name, students[7].name]
  },
  {
    id: 6,
    name: 'C2',
    beds: roomSizes.C,
    students: [students[8].name, students[9].name, students[10].name, students[11].name]
  }
];

export const roomTypes = [
  {
    id: 1,
    name: 'A',
    size: roomSizes.A,
    rooms: [1, 2]
  },
  {
    id: 2,
    name: 'B',
    size: roomSizes.B,
    rooms: [3, 4]
  },
  {
    id: 3,
    name: 'C',
    size: roomSizes.C,
    rooms: [5, 6]
  }
];

export const beds = () => {
  let bedsCount = 0;
  rooms.forEach((room) => {
    bedsCount += room.beds;
  });
  return bedsCount;
};
