const addNewStudent = (state, action) => {
  if(action.name == ''){
    return state;
  }
  function getNewId() {
    let ID = Math.ceil(Math.random() * 100000000);
    return state.students.some((std) => std.id === ID) ? getNewId() : ID;
  }
  const newID = getNewId();
  const student = {
    id: newID,
    name: action.name,
    room: ''
  };
  state.students.push(student);
  return state;
};

export default addNewStudent;
