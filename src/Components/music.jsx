import React, { Component } from "react";
import { getMusics } from "./fakeMusicService";
import Like from "./common/like";
import Play from "./common/play";

class Music extends Component {
  state = {
    musics: getMusics()
  };

  handleLike = music => {
    const musics = [...this.state.musics];
    const index = musics.indexOf(music);
    musics[index] = { ...musics[index] };
    musics[index].liked = !musics[index].liked;
    this.setState({ musics });
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
              <th>
                <Play />
              </th>
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

export default Music;