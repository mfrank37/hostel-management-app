import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRoom } from '../thunks';

const RoomForm = () => {
  const dispatch = useDispatch();
  const { roomSizes } = useSelector(state => ({roomSizes: state.roomSizes}));
  const types = Object.keys(roomSizes);
  const handleNewRoom = (e) => {
    e.preventDefault();
    const { value } = document.querySelector('#new-room');
    dispatch(addNewRoom(value));
  }

  return (
    <div>
      NEW ROOM SIZE: &nbsp;&nbsp;
      <select id='new-room'>
        {
          types.map((type, index) => <option key={index} value={roomSizes[type]}>{type} type : {roomSizes[type]}</option>)
        }
      </select> &nbsp;&nbsp;
      <button type='submit' onClick={handleNewRoom}>ADD ROOM</button>
    </div>
  )
};

export default RoomForm;
