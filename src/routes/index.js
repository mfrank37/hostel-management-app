import { Route } from 'react-router-dom';
import Home from './Home';
import Rooms from './rooms';
import Students from './Students';
import Room from './room';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rooms',
    component: Rooms
  },
  {
    path: '/rooms/:name',
    component: Room
  },
  {
    path: '/students',
    component: Students
  }
];

const routesComponents = routes.map(({path, component}, key) => 
  <Route exact path={path} component={component} key={key} />
);

export default routesComponents;
