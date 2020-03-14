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
            <div id="dynamicSite" class="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#dynamicSite"></li>
                <li data-target="#dynamicSite" data-slide-to="1"></li>
                <li data-target="#dynamicSite" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <MusicTable />
                </div>
                <div className="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#dynamicSite"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#dynamicSite"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            {/* <MusicTable /> */}
          </div>
        </div>
      </form>
    );
  }
}

export default App;
