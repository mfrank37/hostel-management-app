import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { placeStudent, removeStudents } from '../thunks';
import Rooms from './rooms';

const Room = (props) => {

  const { name } = useParams();
  const { students } = useSelector((state) => ({students: state.students}));
  const { rooms } = useSelector((state) => ({rooms: state.rooms}));
  
  const index =  rooms.findIndex((room) => room.name === name);
  if(index < 0) return <Rooms notFound={true}/>;

  const STATUS = rooms[index].beds > rooms[index].students.length 
    ? <p className='does-not-meet'>STATUS : doesn't meet expected</p>
    : rooms[index].beds < rooms[index].students.length 
    ? <p className='exceed'>STATUS : exceed</p>
    : <p className='meet'>STATUS : meet expected</p>;
  const newStudents = () => {
    const set = new Set();
    students.forEach(std => set.add(std.name));
    rooms.forEach((room) => room.students.forEach(stud => set.delete(stud)));
    return Array.from(set);
  };
  const placedStudents = () => {
    const set = new Set();
    rooms.forEach((room) => room.students.forEach(stud => set.add(stud)));
    rooms[index].students.forEach((stud) => set.delete(stud));
    return Array.from(set);
  };
  
  const dispatch = useDispatch();
  const placeStudentHere = ({target}) => {
    dispatch(placeStudent(target, name));
  }
  const removeStudentsFromHere = ({target}) => {
    dispatch(removeStudents(target));
  }

  let key = 1;

  return (
    <>
      <Header title={ 'ROOM ' + name } />
      <div className='room-view'>
          {STATUS}
          <p>BEDS AVAILABLE : { rooms[index].beds }</p>
          <p>STUDENTS PLACED HERE : { rooms[index].students.length }</p>
          <ul className='students-list'>
            { rooms[index].students.map(stud => <li key={stud} className='currently-here' onClick={removeStudentsFromHere}>{stud}</li>)}
          </ul>
          <p style={{textAlign: 'center', backgroundColor: '#ccc'}}>PLACE NEW STUDENTS HERE</p>
        <div className='placing-list'>
          <li key='left1' className='move left'></li>
            { newStudents().map(student => <li key={++key} className='stud' onClick={placeStudentHere}>{student}</li>) }
          <li key='right1' className='move right'></li>
        </div>
        <p style={{textAlign: 'center', backgroundColor: '#ccc'}}>REPLACE/MOVE STUDENTS HERE</p>
        <div className='moving-list'>
          <li key='left2' className='move left'></li>
            { placedStudents().map(student => <li key={++key} className='stud' onClick={placeStudentHere}>{student}</li>) }
          <li key='right2' className='move right'></li>
        </div>
      </div>
    </>
  )
}

export default Room;
