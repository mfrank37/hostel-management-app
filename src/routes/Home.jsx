import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { beds, rooms, roomTypes, students } from '../data';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header title='HOSTEL MANAGEMENT' />
        <div className='home'>
          <Link to='/students'><p>ADMITTED STUDENTS : <span className='does-not-meet'>{students.length}</span></p></Link>
          <Link to='/rooms'><p>AVAILABLE ROOMS   : <span className='meet'>{rooms.length}</span></p></Link>
          <p>AVAILABLE BEDS    : <span className='exceed'>{beds()}</span></p>
          <ul>
          { roomTypes.map((type) => <li key={type.id}>{type.size} bed-rooms = {type.rooms.length}</li>) }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Home;
