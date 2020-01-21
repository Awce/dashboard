import React, { Component } from "react";
import logo from "../logo.svg";

const authSpotifyEndpoint = "https://accounts.spotify.com/authorize";
const spotifyClientID = "378a9dadde5142e392a104831e0b5ab3";
const giphyClientID = "GfRJTbA62a9GdY6Vqhmf3pUQeo25eDlI";
const redirectURL = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private"
];
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(acc, item) {
    let parts = item.split("=");
    acc[parts[0]] = parts[1];
    return acc;
  }, {});

//const clientSecret = "72ea3c8563be47389f589fd7e0017f57";

export default class Kodemia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyAccessToken: null,
      spotifySoundKey: null,
      searchValue: null,
      giphfyUrl: null
    };
  }

  // props datos que se mandan afuera del componente

  // state datos que se estan dentro del componente y sirven para cambiar la app mediante los ciclos de vida.

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        spotifyAccessToken: _token
      });
    }
  }

  renderLogin = () => (
    <div className="app-container">
      <picture>
        <img className="logo" src={logo} alt="logo" />
      </picture>
      <a
        href={`${authSpotifyEndpoint}?client_id=${spotifyClientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login
      </a>
    </div>
  );

  renderSearch = () => (
    <div className="app-container">
      <picture>
        <img className="logo" src={logo} alt="logo" />
      </picture>
      <h1>Kodeparty</h1>
      <input placeholder="Buscar" onKeyDown={this.onKeyDownHandler} />
    </div>
  );

  renderResult = () => {
    const { spotifySoundKey, giphyUrl } = this.state;
    return (
      <div className="app-container">
        <h1>Encontramos...</h1>
        <iframe
          src={`https://embed.spotify.com?uri=spotify:track:${spotifySoundKey}`}
          width="400"
          height="100"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
        <picture>
          <img src={giphyUrl} />
        </picture>
        <button onClick={this.onClickHandler}>Volver a Buscar</button>
      </div>
    );
  };

  onKeyDownHandler = ({ key, target }) => {
    if (key === "Enter") {
      console.log(key, target.value);
      this.setState(
        {
          searchValue: target.value
        },
        () => {
          this.fetchSearchWord(target.value);
        }
      );
    }
  };

  fetchSearchWord = word => {
    const { spotifyAccessToken } = this.state;
    fetch(`https://api.spotify.com/v1/search?q=${word}&type=track&limit=1`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${spotifyAccessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          spotifySoundKey: data.tracks.items[0].id
        });
      });

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${giphyClientID}&q=${word}&limit=1&rating=G&lang=es`
    )
      .then(response => response.json())
      .then(data => {
        let gifUrl = data.data[0].images.original.webp;
        this.setState({
          giphyUrl: gifUrl
        });
      });
  };

  render() {
    console.log(this.state);
    const {
      spotifyAccessToken,
      searchValue,
      spotifySoundKey,
      giphyUrl
    } = this.state;
    return (
      <div className="App">
        {!spotifyAccessToken && this.renderLogin()}
        {spotifyAccessToken && !searchValue && this.renderSearch()}
        {spotifyAccessToken &&
          searchValue &&
          spotifySoundKey &&
          giphyUrl &&
          this.renderResult()}
      </div>
    );
  }
}
