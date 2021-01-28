import { Component } from "react";
import '../App.css';
import Navigation from "./navigation";

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>{this.props.title}</h1>
        <hr width='500' />
        <Navigation />
      </header>
    )
  };
};

export default Header;
