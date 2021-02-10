import { ADD_NEW_ROOM, ADD_NEW_STUDENT, ADD_STUDENT_TO_ROOM, DISPLACE_STUDENT, UNPLACE_STUDENT, DELETE_STUDENT } from '../actions';
import initialState  from '../data';
import addStudentToRoom from './addStudentToRoom';
import displaceStudent from './displaceStudent';
import unplaceStudent from './unplaceStudent';
import createNewRoom from './createNewRoom';
import addNewStudent from './addNewStudent';
import deleteStudent from './deleteStudent';

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPLACE_STUDENT:
      return displaceStudent(state, action);
    case UNPLACE_STUDENT:
      return unplaceStudent(state, action);
    case ADD_STUDENT_TO_ROOM:
      return addStudentToRoom(state, action);
    case ADD_NEW_ROOM:
      return createNewRoom(state, action);
    case ADD_NEW_STUDENT:
      return addNewStudent(state, action);
    case DELETE_STUDENT:
      return deleteStudent(state, action);
    default:
      return state;
  }
};

export default reducer;
