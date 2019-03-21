import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.scss';
import Game from './Game/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CssBaseline />
          <Game />
      </div>
    );
  }
}

export default App;
