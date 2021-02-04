import { Redirect } from "react-router-dom";
import { Component } from 'react';
import Header from '../components/header';
class Login extends Component {
  render() {
    const authenticate = ({target}) => {
      localStorage.setItem(target.user.value, target.pass.value);
      <Redirect to={{pathname: '/students'}} /> 
    }
    return (
      <>
        <Header title='LOGIN' />
        <form onSubmit={authenticate} method='POST'>
          <input type='text'     name='user' id='user' />
          <input type="password" name="pass" id="pass" />
          <button type='submit'  id='submit'> SIGN IN </button>
        </form>
      </>
    )
  }
};

export default Login;