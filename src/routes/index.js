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

export default routes;
