import './Track.css'
import React from 'react'

export class Track extends React.Component{
    constructor(props){
        super(props);
    }

    renderAction(){
        let isRemoval = true;
        return (
            <button>{isRemoval ? '-' : '+'}</button>
        )
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3></h3>
                    <p></p>
                </div>
                <button class="Track-action"></button>
            </div>
        )
    }
}