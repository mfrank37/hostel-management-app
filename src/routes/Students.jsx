import {
  Component, Fragment
} from "react";
import Header from "../components/header";
import Student from '../components/Student';
import { students } from "../data";


class Students extends Component {
  render() {
    return (
      <Fragment>
        <Header title='ADMITTED STUDENTS' />
        <div className='students-list'>
          { 
            students.map((student) => 
              <Student student={student} />
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

export default Students;