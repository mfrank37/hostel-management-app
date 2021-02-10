import { Component } from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/students'>Students</Link> |
        <Link to='/rooms'>Rooms</Link> |
        <Link to='/create'>ADD STUDENTS / ROOMS</Link>
      </nav>
    )
  };
};

export default Navigation;
