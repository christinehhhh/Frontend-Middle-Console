import React, { Component } from "react";
import ENIL from "../musics/Lovebugs-Everybody Knows I LoveYou (Radio Edit).mp3";

class Play extends Component {
  constructor(music) {
    super(music);
    this.state = {
      play: false,
      pause: true
    };
    // const musics = [...this.state.musics];
    // const index = musics.indexOf(music);
    // musics[index] = { ...musics[index] };
    // this.audio = new Audio(musics[index].url);
    this.audio = new Audio(ENIL);
  }

  componentDidMount() {
    this.audio.addEventListener("ended", () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div>
        <i onClick={this.togglePlay}>
          {this.state.play ? (
            <i
              style={{ cursor: "pointer" }}
              aria-hidden="true"
              className="fa fa-pause"
            />
          ) : (
            <i
              style={{ cursor: "pointer" }}
              aria-hidden="true"
              className="fa fa-play"
            />
          )}
        </i>
      </div>
    );
  }
}

// return (
//   <i
//     onClick={props.onClick}
//     style={{ cursor: "pointer" }}
//     className={classes}
//     aria-hidden="true"
//   ></i>
// );

export default Play;
