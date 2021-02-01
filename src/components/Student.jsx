import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Student = (props) => {

  const displaceStudent = async ({target}) => {
    dispatch({
      type: 'DISPLACE_STUDENT',
      student: parseInt(target.getAttribute('data-student')),
      room: target.value
    });
  };
  
  const unplaceStudent = async ({target}) => {
    dispatch({
      type: 'UNPLACE_STUDENT',
      student: parseInt(target.getAttribute('data-student'))
    })
  }

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
      </div>
      <p className='low'>
        {
          rooms.some((room) => room.students.includes(student.name))
          ? <button onClick={unplaceStudent} data-student={student.id}>UNPLACE</button>
          : <button onClick={unplaceStudent} disabled data-student={student.id}>UNPLACE</button>
        }
        ROOM : 
          <select onChange={displaceStudent} data-student={student.id} value={ 
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
