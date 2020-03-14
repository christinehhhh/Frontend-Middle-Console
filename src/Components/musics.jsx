import React, { Component } from "react";
import { getMusics } from "./fakeMusicService";
import Like from "./common/like";
import Play from "./common/play";

class Musics extends Component {
  state = {
    musics: []
  };

  componentDidMount() {
    this.setState({ musics: getMusics() });
  }

  handleLike = music => {
    console.log("Playbutton Clicked");

    const musics = [...this.state.musics];
    const index = musics.indexOf(music);
    musics[index] = { ...musics[index] };
    musics[index].liked = !musics[index].liked;
    this.setState({ musics });
  };

  handlePlay = music => {
    const musics = [...this.state.musics];
    const index = musics.indexOf(music);
    musics[index] = { ...musics[index] };
    musics[index].played = !musics[index].played;
    this.setState({ musics });
    // let audio = new Audio(musics[index].url);
    // if (this.state === "played") {
    //   var status = "paused";
    //   audio.play();
    // } else {
    //   var status = "played";
    //   audio.pause();
    // }
  };

  render() {
    return (
      <table className="table table-hover table-sm table-striped">
        <thead className="thead-dark">
          <tr>
            <th> </th>
            <th>Title</th>
            <th></th>
            <th>Artist</th>
            <th>Album</th>
            <th></th>
            <th>Time</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {this.state.musics.map(music => (
            <tr key={music._id}>
              <td>{this.state.musics.indexOf(music) + 1}</td>
              <th>{music.title}</th>
              <td>
                <Play
                  played={music.played}
                  onClick={() => this.handlePlay(music)}
                />
              </td>
              <td>{music.artist}</td>
              <td>{music.album}</td>
              <td>
                <Like
                  liked={music.liked}
                  onClick={() => this.handleLike(music)}
                />
              </td>
              <td>{music.time}</td>
              <td>{music.genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Musics;
