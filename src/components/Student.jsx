import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteStudent, displaceStudent, unplaceStudent } from '../thunks';

const Student = (props) => {
  const handleDisplaceStudent = async ({target}) => {
    dispatch(displaceStudent(target));
  };
  const handleUnplaceStudent = async ({target}) => {
    dispatch(unplaceStudent(target));
  };
  const handleRemoveStudent = ({target}) => {
    dispatch(deleteStudent(target));
  };
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => ({rooms: state.rooms}));
  const { student } = props;
  const hasRoom = rooms.find(room=>room.name === student.room);
  
  return (
    <div className='student'>
      <div>
        <p className='up'><b className='name'>{student.name}</b> 
          {
            rooms.some((room)=> room.students.includes(student.name))
            ? <span className='status'>PLACED</span> 
            : <span className='exceed'>NOT PLACED</span>
          }
        </p>
        <button data-id={student.id} onClick={handleRemoveStudent}>REMOVE</button>
      </div>
      <p className='low'>
        {
          rooms.some((room) => room.students.includes(student.name))
          ? <button onClick={handleUnplaceStudent} data-student={student.id}>UNPLACE</button>
          : <button onClick={handleUnplaceStudent} disabled data-student={student.id}>UNPLACE</button>
        }
        ROOM : 
          <select onChange={handleDisplaceStudent} data-student={student.id} value={ 
              hasRoom ? rooms.includes(hasRoom) ? hasRoom.name : 'unplaced' : 'unplaced' 
            }>
            <option disabled value='unplaced'></option>
            {
              rooms.map((room) => <option key={room.id} value={room.name}>{room.name}</option>)
            }          
          </select>
      </p>
    </div>
  )
};

export default Student;
