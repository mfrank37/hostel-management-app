import initialState  from '../data';
import addStudentToRoom from './addStudentToRoom';
import displaceStudent from './displaceStudent';
import unplaceStudent from './unplaceStudent';

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DISPLACE_STUDENT':
      return displaceStudent(state, action);
    case 'UNPLACE_STUDENT':
      return unplaceStudent(state, action);
    case 'ADD_STUDENT_TO_ROOM':
      return addStudentToRoom(state, action);
    default:
      return state;
  }
};

export default reducer;
