import React, { Component } from "react";
import { getMusics } from "./fakeMusicService";

class MusicTable extends Component {
  state = {
    musics: getMusics()
  };

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Time</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {this.state.musics.map(music => (
            <tr key={music._id}>
              <th>{music.title}</th>
              <td>{music.artist}</td>
              <td>{music.album}</td>
              <td>{music.time}</td>
              <td>{music.genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MusicTable;
