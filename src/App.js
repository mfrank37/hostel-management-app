import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import routesComponents from './routes';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routesComponents}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
