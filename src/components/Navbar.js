import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Burger from './Burger';
import StyledNavbar from './styles/Navbar.styled';
import  { bool, func } from 'prop-types';
import Headroom from 'react-headroom';


const Navbar = ({open, setOpen}) => {
  return (
    <Router>
      <div>
        <Headroom>
        <StyledNavbar>
          <div className="logo">
            <h4>Kenepa</h4>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              
            <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div>
            
          <Burger  open={open} setOpen={setOpen} />
          
        </div>
        </StyledNavbar>
        </Headroom>

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


Navbar.propTypes = {
  open:  bool.isRequired,
  setOpen: func.isRequired,
};


export default Navbar;