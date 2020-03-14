import React, { Component } from "react";
import { getMusics } from "./fakeMusicService";

class MusicTable extends Component {
  state = {
    musics: getMusics()
  };

  render() {
    return (
      <table className="table table-hover table-sm table-striped">
        <thead className="thead-dark">
          <tr>
            <th> </th>
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
              <td>{this.state.musics.indexOf(music) + 1}</td>
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
