import React, { Component } from 'react';
import logo from './konnex-logo.jpg';
import svglogo from './konnex-logo.svg';
import svglogo_2 from './konnex-logo-2.svg';
import svglogo_3 from './konnex-with-beat.svg';
import svg_loading from './konnex-with-beat_copy.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            <div className="variation-1">
              <img src={logo} className="App-logo" alt="logo" />
              <div>Loading...</div>
            </div>
          </div>
      
          <div className="col d-none">
            <div className="variation-2">
              <img src={svglogo} className="App-logo" alt="logo" />
            </div>
          </div>

          <div className="col">
            <div className="variation-3">
              <img src={svglogo_2} className="App-logo" alt="logo" />
            </div>
          </div>

          <div className="col">
            <div className="variation-4">
              <img src={svglogo_3} className="App-logo" alt="logo" />
              <img src={svg_loading} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
