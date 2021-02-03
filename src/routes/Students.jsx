import Header from "../components/header";
import Student from '../components/Student';
import { useSelector } from 'react-redux';

const Students = () => {
  const students = useSelector((state) => state.students);
  return (
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
