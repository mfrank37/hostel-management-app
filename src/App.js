import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { createStore } from 'redux';
import reducer from './controllers/reducer';
import routes from './routes';

const store = createStore(reducer);

class App extends Component {
  render() {
    const routesComponents = routes.map(({path, component}, key) => 
      <Route exact path={path} component={component} key={key} />
    );
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
