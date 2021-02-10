import Header from "../components/header";
import Student from '../components/Student';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const Students = () => {
  const students = useSelector((state) => state.students);
  const authenticated = localStorage.getItem('yuza') == 'pass' ? true : false;

  return !authenticated ? <Redirect to={{pathname: '/login'}} /> :(
    <>
      <Header title='ADMITTED STUDENTS' />
      <div className='students-list'>
        { 
          students.map((student) => 
            <Student state={student} key={student.id} student={student} />
          ) 
        }
      </div>
    </>
  )
};

export default Students;
