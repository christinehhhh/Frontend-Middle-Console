import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Musics from "./components/musics";
import Buttons from "./components/buttons";
import Login from "./components/login";
import NotFound from "./components/notFound";
import LightSelector from "./components/lightSelector";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="row">
          <div className="col">{/* <Navbar /> */}</div>
        </div>
        <div className="row">
          <div className="col">
            <Buttons />
          </div>
          <div className="col">
            <main className="container" />
            <Switch>
              <Route path="/musics" component={Musics} />
              <Route path="/login" component={Login} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/color-picker" component={LightSelector} />
              <Redirect from="/" exact to="/login" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
