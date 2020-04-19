import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Navbar.scss';
import Home from './Home.js';
import About from './About.js';


export default class Navbar extends Component {
    render() {
    return (
        <Router>
          <div>
            <nav className="Navbar">
            <svg width="50" height="50" viewBox="0 0 260 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="162.948" cy="44.8675" rx="9" ry="8.5" transform="rotate(-145.804 162.948 44.8675)" fill="url(#paint0_linear)"/>
                    <ellipse rx="89" ry="94" transform="matrix(0.82712 0.562026 0.562026 -0.82712 129.719 132.914)" fill="url(#paint1_linear)"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="19" y="61" width="199" height="198">
                    <ellipse cx="118.664" cy="159.859" rx="72" ry="70.5" transform="rotate(-145.804 118.664 159.859)" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0)">
                    <ellipse cx="101.36" cy="141.451" rx="96.6575" ry="101" transform="rotate(-145.804 101.36 141.451)" fill="white" fill-opacity="0.38"/>
                    </g>
                    <ellipse cx="117.376" cy="164.424" rx="64.5" ry="66" transform="rotate(-145.804 117.376 164.424)" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="162.948" y1="36.3675" x2="162.948" y2="53.3675" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#19DCF7"/>
                    <stop offset="1" stop-color="#086673"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="89" y1="2.36309e-06" x2="172.156" y2="154.824" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#059797"/>
                    <stop offset="1" stop-color="#2BC9C9"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="117.376" y1="98.4237" x2="117.376" y2="230.424" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E4701C"/>
                    <stop offset="1" stop-color="#FFA09A"/>
                    </linearGradient>
                    </defs>
                </svg>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          </Router>
      );
            }
}
