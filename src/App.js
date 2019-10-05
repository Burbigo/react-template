import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { root } from './routes/internal';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <header>
            {
              // Define Header component 
            }
          </header>
          <main id="main">
            <Switch>
              <Route path={root} exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <footer>
              {
                // Define Footer component 
              }
          </footer>
        </Fragment>
      </div>
    );
  }
}

export default App;
