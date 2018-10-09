// Main component for the UI portion of the SDR Edge App.
// Built on react: https://reactjs.org/docs/getting-started.html

import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import GlobalServices from './containers/GlobalServices';
import EdgeNodeMap from './containers/EdgeNodeMap';

import Header from './components/Header';
import Nav from './components/Nav';

import './App.css';

class App extends Component {
  render() {
    // Return components to render. This is JSX, see https://reactjs.org/docs/introducing-jsx.html
    return (
      <BrowserRouter>
        <div>
          <Header />
            <div className="bx--grid">
              <div className="bx--row">
                <div className="bx--offset-xs-2 bx--col-xs-12">
                  <div className="app-content">
                    <Route path="/global-keywords" component={GlobalServices} />
                    <Route path="/edge-nodes" component={EdgeNodeMap} />
                  </div>
                </div>
              </div>
            </div>
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;