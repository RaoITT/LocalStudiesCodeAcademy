import './SearchResults.css'
import React from 'react';
import { TrackList } from '../TrackList/TrackList';

export class SearchResult extends React.Component{
    constructor(Props){
        super(Props)
    }
    render(){
        return(
            <div className="SearchResult">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResult} onAdd={this.props.onAdd}/>
            </div>
        )
    }

}

