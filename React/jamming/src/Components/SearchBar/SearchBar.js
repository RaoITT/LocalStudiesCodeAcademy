import './SearchBar.css'
import React from 'react';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this._bind('search', 'handleTermChange');
    }

    search(term){
        this.props.onSearch(term)
    }

    handleTermChange(event){
        this.search(event.target.value);
    }

    render(){
        return(
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}