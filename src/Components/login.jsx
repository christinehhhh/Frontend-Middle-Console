import React, { Component } from "react";
import Logo from "./images/eCARus Logo.png";

class Login extends Component {
  render() {
    const picsWeight = window.innerWidth / 5;

    return (
      <React.Fragment>
        <div className="text-center mb-4">
          <img src={Logo} alt="" className="mb-w" width={picsWeight} />
          <h1 className="h3 mb-3 font-weight-normal">Welcome to eCARus!</h1>
        </div>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </React.Fragment>
    );
  }
}

export default Login;
