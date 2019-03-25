import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.scss';
import PaginaInicial from './PaginaInicial/index';
import Game from './Game/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CssBaseline />
          <BrowserRouter>
              <Route path="/" exact={true} component={ PaginaInicial } />
              <Route path="/game" component={ Game } />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
