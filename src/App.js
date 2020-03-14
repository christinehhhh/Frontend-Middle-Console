import React, { Component } from "react";
import "./App.css";
import Musics from "./components/musics";
import Buttons from "./components/buttons";

class App extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <Buttons />
          </div>
          <div className="col">
            <Musics />
          </div>
        </div>
      </form>
    );
  }
}

export default App;
