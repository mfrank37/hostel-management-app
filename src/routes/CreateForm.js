import React from 'react';
import Header from '../components/header';
import RoomForm from './roomForm';
import StudentForm from './studentForm';

const CreateForm = (props) => {

  return (
    <>
      <Header title='ADD STUDENTS OR ROOMS'/>
      <form className='add-new'>
        <StudentForm />
        <hr />
        <RoomForm />
      </form>
    </>
  )
};

export default CreateForm;
