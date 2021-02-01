import {
  Component, Fragment
} from "react";
import { connect } from 'react-redux';
import Header from "../components/header";
import Student from '../components/Student';
import { useSelector } from 'react-redux';

const Students = () => {
  const students = useSelector((state) => state.students);
  console.log(students);
  return (
    <Fragment>
      <Header title='ADMITTED STUDENTS' />
      <div className='students-list'>
        { 
          students.map((student) => 
            <Student state={student} key={student.id} student={student} />
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
};

export default Students;
