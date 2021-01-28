import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Room from './routes/room';
import Rooms from './routes/rooms';
import Students from './routes/Students';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/rooms' component={Rooms} />
      <Route path='/rooms/:name' component={Room} />
      <Route path='/students' component={Students} />
      </BrowserRouter>
    )
  }
};

export default App;