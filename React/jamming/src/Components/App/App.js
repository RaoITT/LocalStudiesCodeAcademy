
import './App.css';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResults/SearchResults';
import React from 'react';
import { TrackList } from '../TrackList/TrackList';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResult:[],
      PlaylistName: 'My Playlist',
      PlaylistTracks: []
    }
    this._bind('addTrack', 'removeTrack', 'updatePlaylistName', 'savePlaylist', 'search');
    this.state.SearchResult = SearchResult;
  }

  addTrack(track){
    if(!this.state.PlaylistTracks.find(PlaylistTrack => PlaylistTrack.id === track.id)){
      this.setState(prevState => ({
        PlaylistTracks: [...prevState.Playlist, track]
      }))
    }
  }

  removeTrack(track){
    this.setState({
      PlaylistTrack: this.state.PlaylistTracks.filter(removeTrack => removeTrack.id === track.id)
    })
  }

  updatePlaylistName(newPlaylistName) {
    this.setState({
      PlaylistName: newPlaylistName
    })
  }

  savePlaylist(){
    const trackURIs = this.state.PlaylistTracks.map(PlaylistTrack => PlaylistTrack.uri)
  }

  search(lookupTerm){

  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack}  />
            <Playlist 
              name={this.state.PlaylistName}
              tracks={this.state.PlaylistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              />

          </div>
        </div>
      </div>
    );
  }
}
