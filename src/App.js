import React, { Component } from 'react';

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
