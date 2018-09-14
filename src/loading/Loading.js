import React, {Component} from 'react';
import svglogo_3 from '../konnex-with-beat.svg';
import svg_loading from '../konnex-with-beat_copy.svg';
import './Loading.css'

export default class Loading extends Component
{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="konnexapp-Loading">
                <img src={svglogo_3} className="App-logo" alt="logo" />
                <img src={svg_loading} className="App-logo" alt="logo" />
            </div>
        )
    }
}
