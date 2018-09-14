import React, { Component } from 'react';
import logo from './konnex-logo.jpg';
import svglogo from './konnex-logo.svg';
import svglogo_2 from './konnex-logo-2.svg';
import svglogo_3 from './konnex-with-beat.svg';
import svg_loading from './konnex-with-beat_copy.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Loading from './loading';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            <div className="variation-4">
              <Loading/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
