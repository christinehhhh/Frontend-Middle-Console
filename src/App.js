import React, { Component } from "react";
import "./App.css";
import MusicTable from "./components/musicTable";
import Buttons from "./components/buttons";

class App extends Component {
  state = {};
  render() {
    return (
      <form>
        <div class="row">
          <div class="col">
            <Buttons />
          </div>
          <div class="col">
            <MusicTable />
          </div>
        </div>
      </form>
    );
  }
}

export default App;
