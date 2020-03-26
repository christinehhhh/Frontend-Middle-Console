import React, { Component } from "react";
import Logo from "./images/eCARus Logo.png";

class Login extends Component {
  state = {
    account: { email: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();

    //Call the server
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const picsWeight = window.innerWidth / 5;
    const { account } = this.state;

    return (
      <React.Fragment>
        <div className="text-center mb-4">
          <img src={Logo} alt="" className="mb-w" width={picsWeight} />
          <h1 className="h3 mb-3 font-weight-normal">Welcome to eCARus!</h1>
        </div>
        <div>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                value={account.email}
                onChange={this.handleChange}
                id="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={account.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
