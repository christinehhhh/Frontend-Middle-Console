import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Musics from "./components/musics";
import Buttons from "./components/buttons";
import Login from "./components/login";
import NotFound from "./components/notFound";
import LightSelector from "./components/lightSelector";
import Title from "./components/title";
import Status from "./components/status";
import Map from "./components/map";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="row">
            <div className="col-sm-1.5">
              <Buttons />
            </div>
            <div className="col-sm-4.5">
              <Status />
            </div>
            <div className="col">
              <Title />
              <Switch>
                <Route path="/musics" component={Musics} />
                <Route path="/login" component={Login} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/color-picker" component={LightSelector} />
                <Route path="/map" component={Map} />
                <Redirect from="/" exact to="/login" />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
