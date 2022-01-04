import './Playlist.css'
import React from 'react'
import TrackList from '../TrackList/TrackList'

export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this._bind('handleNameChange');
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render(){
        return (
            <div className="Playlist">
                <input defaultValue ={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.PlaylistTracks}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}