import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Home =() => {
  const { rooms } = useSelector((state) => ({rooms: state.rooms}));
  const { roomTypes } = useSelector((state) => ({roomTypes: state.roomTypes}));
  const { students } = useSelector((state) => ({students: state.students}));
  const { beds } = useSelector((state) => ({beds: state.beds}));

  return (
    <>
      <Header title='HOSTEL MANAGEMENT' />
      <div className='home'>
        <Link to='/students'><p>ADMITTED STUDENTS : <span className='does-not-meet'>{students.length}</span></p></Link>
        <Link to='/rooms'><p>AVAILABLE ROOMS   : <span className='meet'>{rooms.length}</span></p></Link>
        <p>AVAILABLE BEDS    : <span className='exceed'>{beds()}</span></p>
        <ul>
        { roomTypes.map((type) => <li key={type.id}>{type.size} bed-rooms = {type.rooms.length}</li>) }
        </ul>
      </div>
    </>
  )
}

export default Home;
