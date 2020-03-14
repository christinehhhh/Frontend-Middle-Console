import React, { Component } from "react";
import MusicPlayer from "react-responsive-music-player";

const playlist = [
  {
    url: "./musics/Lovebugs-Everybody Knows I LoveYou (Radio Edit).mp3",
    cover: "./Images/Everybody Knows I Love You.png",
    title: "Everybody Knows I Love You",
    artist: ["Lovebugs"]
  }
];

class ProgressBar extends Component {
  render() {
    return (
      <div>
        <MusicPlayer playlist={playlist} width="200%" />
      </div>
    );
  }
}

export default ProgressBar;
