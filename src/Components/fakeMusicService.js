import * as genresAPI from "./fakeGenreService";

const musics = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "A Day in the Life",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    artist: "The Beatles",
    album: "Sgt. Peppers Lonely Hearts Club Band",
    time: "5:31",
    url: "./musics/The Beatles-A Day In the Life.mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Yokubou Ni Michita Seinendan",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    artist: "ONE OK ROCK",
    album: "Zeitakubyō",
    time: "3:22",
    url: "./musics/ONE OK ROCK (ワンオクロック)-欲望に満ちた青年団.mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Everything Stays",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Soundtrack" },
    artist: "Marcy",
    album: "Adventure Time",
    time: "1:35",
    url: "./musics/Adventure Time,Olivia Olson-Everything Stays.mp3"
  },

  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "ISLAND",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Pop" },
    artist: "WINNER",
    album: "OUR TWENTY FOR",
    time: "3:27",
    url: "./musics/WINNER (위너)-ISLAND (Korean Ver.).mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Shape of You",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Pop" },
    artist: "Ed Sheeran",
    album: "÷",
    time: "3:53",
    url: "./musics/Ed Sheeran-Shape of You.mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Hypnotised",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Pop" },
    artist: "Years & Years",
    album: "Palo Santo",
    time: "4:03",
    url: "./musics/Years & Years-Hypnotised.mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Un Amico",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Soundtrack" },
    artist: "Ennio Morricone",
    album: "Inglourious Basterds",
    time: "2:35",
    url: "./musics/Ennio Morricone-Un Amico (Album Version).mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Apple Blossom",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Soundtrack" },
    artist: "The White Stripes",
    album: "The Hateful Eight",
    time: "2:13",
    url: "./musics/The White Stripes-Apple Blossom.mp3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Everybody Knows I Love You",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
    artist: "Lovebugs",
    album: "Only Forever",
    time: "3:15",
    url: "./musics/Lovebugs-Everybody Knows I LoveYou (Radio Edit).mp3"
  }
];

export function getMusics() {
  return musics;
}

export function getMusic(id) {
  return musics.find(m => m._id === id);
}

export function saveMusic(music) {
  let musicInDb = musics.find(m => m._id === music._id) || {};
  musicInDb.name = music.name;
  musicInDb.genre = genresAPI.genres.find(g => g._id === music.genreId);
  musicInDb.numberInStock = music.numberInStock;
  musicInDb.dailyRentalRate = music.dailyRentalRate;

  if (!musicInDb._id) {
    musicInDb._id = Date.now();
    musics.push(musicInDb);
  }

  return musicInDb;
}

export function deleteMusic(id) {
  let musicInDb = musics.find(m => m._id === id);
  musics.splice(musics.indexOf(musicInDb), 1);
  return musicInDb;
}
