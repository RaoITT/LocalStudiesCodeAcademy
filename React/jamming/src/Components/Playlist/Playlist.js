import './Playlist.css'
import React from 'react'
import TrackList from '../TrackList/TrackList'

export class Playlist extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="Playlist">
                <input defaultValue ={'New Playlist'}/>
                <TrackList tracks={this.props.PlaylistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}