import { useSelector } from 'react-redux';
import {
  Link,
  useParams
} from 'react-router-dom';
import Header from '../components/header';
import {
  rooms
} from '../data';

const totalPages = Math.floor(rooms.length / 4);
const pages = [
  [0, 4],
  [4, 6]
];
console.log(totalPages === pages.length);

const Rooms = (props) => {
  console.log(props)
  const s = useParams();
  console.log(s)

  // let {
  //   search
  // } = props.location;
  // search = search.slice(1);
  // let page;

  const nextPage = () => {
    const {
      params
    } = getParams(search);
    const currPage = params.find((el) => el.hasOwnProperty('page'));
    console.log(currPage);
    if (currPage) {
      console.log(search.match(/page=\d*/));
      console.log(props.location.search);
      return props.location.pathname + '?' + search.replace(/page=\d*/, `page=${parseInt(currPage.page) + 1}`);
    } else {
      return props.location.pathname + '?page=' + 2;
    }
  }

  const prevPage = () => {
    const {
      params
    } = getParams(search);
    const currPage = params.find((el) => el.hasOwnProperty('page'));
    console.log(currPage);
    if (currPage) {
      console.log(search.match(/page=\d*/));
      console.log(props.location.search);
      return props.location.pathname + '?' + search.replace(/page=\d*/, `page=${parseInt(currPage.page <= 0 ? 1 : currPage.page) - 1}`);
    } else {
      return props.location.pathname;
    }
  }

  const getParams = (query) => {
    const params = query.split('&').map(param => {
      let key = param.split('=')[0];
      let val = param.split('=')[1];
      return {
        [key]: val
      }
    });
    console.log(params);
    if (query) {
      page = params.find((el) => el.hasOwnProperty('page')).page - 1;
      page = page <= 0 || page > totalPages ? 0 : page;
      const viewRooms = rooms.slice(...pages[page]);
      return {
        viewRooms,
        params
      }
    } else {
      const viewRooms = rooms.slice(...pages[0]);
      page = 1;
      return {
        viewRooms,
        params
      }
    }
  };

  // const {
  //   viewRooms
  // } = getParams(search);

  const { rooms } = useSelector((state) => ({rooms: state.rooms}));

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
