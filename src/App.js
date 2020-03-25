import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Musics from "./components/musics";
import Buttons from "./components/buttons";
import Login from "./components/login";
import NotFound from "./components/notFound";
import LightSelector from "./components/lightSelector";
import DarkModeToggle from "./components/common/darkModeToggle";
import "./styles.scss";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <form>
        <DarkModeToggle />
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
