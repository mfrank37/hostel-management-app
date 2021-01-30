import { Component } from 'react';
import { rooms } from '../data';

class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <div className='student'>
        <p>
          <p className='up'><b className='name'>{student}</b> <span className='status'>PLACED</span></p>
        </p>
        <p className='low'>
          <button>UNPLACE</button>
          ROOM : 
          <select>
            <option selected> </option>
            {rooms.map(room => room.students.includes(student) ? <option selected>{room.name}</option> : <option>{room.name}</option>)}
          </select>
        </p>
      </div>
    )
  }
}

export default Student;
