import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Footer from './components/partials/Footer';
import Home   from './components/Home';
import About  from './components/About';
import Header from './components/partials/Header';
import MyMap  from './components/MyMap';
import Stats from './components/Stats';


export default () => (
  <Router>
    <div className="App">
      <div>
        <Header className="App-header" />

      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mymap" component={MyMap} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>

      <Footer />
    </div>
  </Router>
);

