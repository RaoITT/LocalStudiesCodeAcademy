import './Track.css'
import React from 'react'

export class Track extends React.Component{
    constructor(props){
        super(props);
        this._bind('addTrack');
    }

    renderAction(){
        if(this.props.onAdd) {
            return <a className='Track-Action' onClick={this.addTrack}>+</a>
        }else{
            return <a className='Track-Action' onClick={this.addTrack}>-</a>
        }
    }

    addTrack(){
        this.props.onAdd(this.props.track)
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.Track.name}</h3>
                    <p>{this.props.Track.artist} | {this.props.Track.album}</p>
                </div>
                <button class="Track-action"></button>
            </div>
        )
    }
}