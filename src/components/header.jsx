import { Component } from "react";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>{this.props.title}</h1>
        <hr width='500' />
      </header>
    )
  };
};

export default Header;
