import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewStudent } from '../thunks';

const StudentForm = () => {
  const dispacth = useDispatch();
  const handleAddStudent = (e) => {
    e.preventDefault();
    const{ value }= document.querySelector('#new-student');
    dispacth(addNewStudent(value));
    document.querySelector('#new-student').value = '';
  };

  return (
    <div>
      ADD NEW STUDENT <br />
      <input type='text' id='new-student' />&nbsp;&nbsp;
      <button type="submit" onClick={handleAddStudent}>ADD STUDENT </button>
    </div>
  )
};

export default StudentForm;
