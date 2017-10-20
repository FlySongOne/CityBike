import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mymap">Station Map</Link></li>
            <li><Link to="/stats">Stats</Link></li>

          </ul>
        </nav>
      </div>
    );
  };
}

export default Nav;
