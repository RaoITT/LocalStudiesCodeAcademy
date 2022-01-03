import './Tracklist.css'
import React from 'react';
import { Track } from '../Track/Track'

export class TrackList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="TrackList">
                {this.props.Track.map(track=> <track key={track.id} track={track} onAdd={this.props.onAdd}/>)}
            </div>
        )
    }
}