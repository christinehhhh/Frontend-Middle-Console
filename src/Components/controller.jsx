import React from "react";

class Controller extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);

    document.body.addEventListener("keypress", e => {
      if (
        e.key === " " &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        this.togglePlay();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.audio) return null;

    if (nextProps.playing) {
      this.props.audio.play();
    } else {
      this.props.audio.pause();
    }
  }

  togglePlay() {
    this.props.togglePlay();
  }

  render() {
    if (!this.props.audio) return null;

    const togglePlayButton = this.props.playing ? (
      <i className="fa fa-pause" aria-hidden="true" />
    ) : (
      <i className="fa fa-play" aria-hidden="true" />
    );

    return (
      <ul className="controller">
        <li onClick={this.togglePlay}>{togglePlayButton}</li>
      </ul>
    );
  }
}

export default Controller;
