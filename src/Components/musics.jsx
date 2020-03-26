import React, { Component } from "react";
import Like from "./common/like";
import Play from "./common/play";
import { getMusics } from "./fakeMusicService";

class Musics extends Component {
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

  handlePlay = music => {
    const musics = [...this.state.musics];
    const index = musics.indexOf(music);
    musics[index] = { ...musics[index] };
    musics[index].play = !musics[index].play;
    this.setState({ musics });
  };

  render() {
    return (
      <React.Fragment>
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
                  <Play
                    played={music.played}
                    onClick={() => this.handlePlay(music)}
                  />
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
      </React.Fragment>
    );
  }
}

export default Musics;
