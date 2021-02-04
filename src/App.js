import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import routesComponents from './routes';
import Login from './routes/Login';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routesComponents}
            <Login exact path='/login' />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
