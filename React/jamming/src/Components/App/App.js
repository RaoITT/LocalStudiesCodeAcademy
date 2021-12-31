
import './App.css';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResults/SearchResults';
import React from 'react';

export class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
    
          <div className="App-playlist">
      

          </div>
        </div>
      </div>
    );
  }
}
