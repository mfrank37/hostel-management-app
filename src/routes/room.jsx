import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Rooms from './rooms';


const Room = () => {

  // const { params } = this.props.match;
  const { name } = useParams();
  const { students, rooms } = useSelector((state) => ({students: state.students, rooms: state.rooms}));
  const index =  rooms.findIndex((room) => room.name === name);
  if(index < 0) return <Rooms notFound={true}/>;

  const STATUS = rooms[index].beds > rooms[index].students.length 
    ? <p className='does-not-meet'>STATUS : doesn't meet expected</p>
    : rooms[index].beds < rooms[index].students.length 
    ? <p className='exceed'>STATUS : exceed</p>
    : <p className='meet'>STATUS : meet expected</p>;
  console.log(STATUS);
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

  return (
    <>
      <Header title={ 'ROOM ' + name } />
      <div className='room-view'>
          {STATUS}
          <p>BEDS AVAILABLE : { rooms[index].beds }</p>
          <p>STUDENTS PLACED HERE : { rooms[index].students.length }</p>
          <ul className='students-list'>
            { rooms[index].students.map(stud => <li>{stud}</li>)}
          </ul>
          <p style={{textAlign: 'center', backgroundColor: '#ccc'}}>PLACE NEW STUDENTS HERE</p>
        <div className='placing-list'>
          <li className='move left'></li>
            { newStudents().map(student => <li className='stud'>{student}</li>) }
          <li className='move right'></li>
        </div>
        <p style={{textAlign: 'center', backgroundColor: '#ccc'}}>REPLACE/MOVE STUDENTS HERE</p>
        <div className='moving-list'>
          <li className='move left'></li>
            { placedStudents().map(student => <li className='stud'>{student}</li>) }<li className='move right'>
          </li>
        </div>
      </div>
    </>
  )
}

export default Room;
