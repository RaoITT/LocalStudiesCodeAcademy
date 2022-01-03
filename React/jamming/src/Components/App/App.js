
import './App.css';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResults/SearchResults';
import React from 'react';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResult:[],
      PlaylistName: 'My Playlist',
      PlaylistTracks: []
    }
    this._bind('addTrack');
    this.state.SearchResult = SearchResult;
  }

  addTrack(track){
    if(!this.state.PlaylistTracks.find(PlaylistTrack => PlaylistTrack.id === track.id)){
      this.setState(prevState => ({
        PlaylistTracks: [...prevState.Playlist, track]
      }))
    }
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist 
              name={this.state.PlaylistName}
              tracks={this.state.PlaylistTracks}
              />

          </div>
        </div>
      </div>
    );
  }
}
