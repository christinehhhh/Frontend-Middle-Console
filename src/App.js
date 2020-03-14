import React, { Component } from "react";
import "./App.css";
import Music from "./components/music";
import Buttons from "./components/buttons";
import Login from "./components/login";

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
            <div
              id="dynamicSite"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#dynamicSite"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#dynamicSite" data-slide-to="1"></li>
                <li data-target="#dynamicSite" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Music />
                </div>
                <div className="carousel-item">
                  <Login />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#dynamicSite"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#dynamicSite"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
