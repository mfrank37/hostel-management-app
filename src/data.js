export const students = [
    'Frank',
    'Marry',
    'Max',
    'Thunder',
    'Tom',
    'Jerry',
    'Harry',
    'Riyuk',
    'Wendy',
    'Ammy',
    'Persie',
    'Robin',
    'Cedro',
    'Paul',
    'Kelly',
    'Linda',
    'Zoe'
];

export const roomSizes = Object.freeze({
    A: 1,
    B: 2,
    C: 4
});

export const rooms = [
    {
        name: 'A1',
        beds: roomSizes.A,
        students: [students[0]]
    },
    {
        name: 'A2',
        beds: roomSizes.A,
        students: []
    },
    {
        name: 'B1',
        beds: roomSizes.B,
        students: [students[1]]
    },
    {
        name: 'B2',
        beds: roomSizes.B,
        students: [students[3], students[4], students[5]]
    },
    {
        name: 'C1',
        beds: roomSizes.C,
        students: [students[6], students[7]]
    },
    {
        name: 'C2',
        beds: roomSizes.C,
        students: [students[8], students[9], students[10], students[11]]
    }
];

export const roomTypes = [
  {
    name: 'A',
    size: roomSizes.A,
    count: 2
  },
  {
    name: 'B',
    size: roomSizes.B,
    count: 2
  },
  {
    name: 'C',
    size: roomSizes.C,
    count: 2
  }
];

export const beds = () => {
  let bedsCount = 0;
  rooms.forEach((room) => {
    bedsCount += room.beds;
  });
  return bedsCount;
};
