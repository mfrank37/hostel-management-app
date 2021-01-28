import { Component, Fragment } from 'react';
import Header from '../components/header';
import { rooms, students } from '../data';
import Rooms from './rooms';

class Room extends Component {
  render() {
    const { params } = this.props.match;
    const index =  rooms.findIndex((room) => room.name === params.name);
    console.log(rooms[index]);
    const ROOM = index < 0 ? 'ROOM NOT FOUND' : 'ROOM FOUND';
    if (ROOM === 'ROOM NOT FOUND') {
      return <Rooms notFound={true}/>;
    }
    const STATUS = rooms[index].beds > rooms[index].students.length ? <p className='does-not-meet'>STATUS : doesn't meet expected</p> 
      : rooms[index].beds < rooms[index].students.length ? <p className='exceed'>STATUS : exceed</p>
      : <p className='meet'>STATUS : meet expected</p>;
    console.log(STATUS);
    const newStudents = () => {
      const set = new Set();
      students.forEach(std => set.add(std));
      rooms.forEach((room) => room.students.forEach(stud => set.delete(stud)));
      return Array.from(set);
    };
    const placedStudents = () => {
      const set = new Set();
      rooms.forEach((room) => room.students.forEach(stud => set.add(stud)));
      rooms[index].students.forEach((stud) => set.delete(stud));
      return Array.from(set);
    }
    return (
      <Fragment>
        <Header title={ 'ROOM ' + params.name } />
        <div className='room-view'>
            {STATUS}
            <p>BEDS AVAILABLE : { rooms[index].beds }</p>
            <p>STUDENTS PLACED HERE : { rooms[index].students.length }</p>
            <ul className='students-list'>
              { rooms[index].students.map(stud => <li>{stud}</li>)}
            </ul>
            <p style={{textAlign: 'center'}}>PLACE NEW STUDENTS HERE</p>
          <div className='placing-list'>
            <li className='move left'></li>{ newStudents().map(student => <li>{student}</li>) }<li className='move right'></li>
          </div>
          <p style={{textAlign: 'center'}}>REPLACE/MOVE STUDENTS HERE</p>
          <div className='moving-list'>
            <li className='move left'></li>{ placedStudents().map(student => <li>{student}</li>) }<li className='move right'></li>
          </div>
        </div>
      </Fragment>
    )
  }
};

export default Room;