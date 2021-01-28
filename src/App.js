import { Component, Fragment } from 'react';
import Header from './components/header';
import './App.css';
import { beds, rooms, roomTypes, students } from './data';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title='HOSTEL MANAGEMENT' />
        <div className='home'>
          <p>ADMITTED STUDENTS : <span className='does-not-meet'>{students.length}</span></p>
          <p>AVAILABLE ROOMS   : <span className='meet'>{rooms.length}</span></p>
          <p>AVAILABLE BEDS    : <span className='exceed'>{beds()}</span></p>
          <ul>
            { roomTypes.map((type) => <li>{type.size} bed-rooms = {type.count}</li>)}
          </ul>
        </div>
      </Fragment>
    )
  }
};

export default App;