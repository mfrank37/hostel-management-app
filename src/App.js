import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { createStore } from 'redux';
import reducer from './controllers/reducer';
import Home from './routes/Home';
import Room from './routes/room';
import Rooms from './routes/rooms';
import Students from './routes/Students';

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
            <Route path='/students' component={Students} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
