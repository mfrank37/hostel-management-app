import { useSelector } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import Header from '../components/header';

const Rooms = (props) => {

  const { rooms } = useSelector((state) => ({rooms: state.rooms}));
  rooms.sort((a, b) => a.name < b.name ? -1 : a.name < b.name ? 1 : 0);

  return (
    <>
      <Header title='VIEW ROOMS' />
      <div>
        { 
          props.notFound ? <div style={{textAlign: 'center'}}>ROOM NOT FOUND! <br /> please select! </div>
          : ''
        }
      </div>
      <div className='rooms-view'>
        {
          rooms.map((room) =>
            <Link className='room' to={'/rooms/' + room.name} key={room.id}>
              <li className={
                room.beds > room.students.length ? 'does-not-meet' : room.beds < room.students.length ? 'exceed' : 'meet'
                } style={{listStyle: 'none'}}
              >
                Room     : { room.name }
              </li>
                  students : { room.students.length }<br />
                  beds     : { room.beds }<br />
            </Link>
          )
        }
      </div>
    </>
  )
}

export default Rooms;
