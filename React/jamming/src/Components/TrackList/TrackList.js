import './Tracklist.css'
import React from 'react';
import { Track } from '../Track/Track'

export class TrackList extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} />)}
              </div>
        );
    }
}