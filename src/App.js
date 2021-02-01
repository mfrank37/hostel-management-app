import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { createStore } from 'redux';
import './App.css';
import Home from './routes/Home';
import Room from './routes/room';
import Rooms from './routes/rooms';
import Students from './routes/Students';
import {beds, rooms, roomTypes, students}  from './data';
import handleActions from './controllers/handleActions';

const initialState = {
  title: 42,
  rooms,
  beds,
  students,
  roomTypes
}

function reducer(state = initialState, action){
  console.log(action);
  return handleActions(state, action);  
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rooms' component={Rooms} />
            <Route path='/rooms/:name' component={Room} />
            <Route path='/students' component={Students} students={this.props.students}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
};

const mapStateToProps = (state) => ({
  rooms,
  students
})

export default App;