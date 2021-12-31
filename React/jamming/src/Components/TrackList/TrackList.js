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
                <Track  title='first' artist='me' album='none' />
                <Track  title='second' artist='me' album='none' />
                <Track  title='third' artist='me' album='none' />
            </div>
        )
    }
}