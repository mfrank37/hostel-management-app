import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { rooms } from '../data';

class Rooms extends Component {
  render() {
    return (
      <Fragment>
        <Header title='VIEW ROOMS' />
        <div>
          { 
            this.props.notFound ? <div style={{textAlign: 'center'}}>ROOM NOT FOUND! <br /> please select! </div>
            : ''
          }
        </div>
        <div className='rooms-view'>
          {
            rooms.map((room) =>
              <Link className='room' to={'/rooms/' + room.name}>
                <p>
                  Room     :{ room.name } <br />
                  students : { room.students.length }<br />
                  beds     : { room.beds }<br />
                </p>
              </Link>
            )
          }
        </div>
        <div className='items-nav rooms'>
          <li className='move left'></li>
          <span>PAGE 1</span>
          <li className='move right'></li>
        </div>
      </Fragment>
    )
  }
};

export default Rooms;
