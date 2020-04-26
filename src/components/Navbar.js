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
import Menu from './Menu';
import StyledNavbar from './styles/Navbar.styled';
import  { bool, func } from 'prop-types';


const Navbar = ({open, setOpen}) => {
  return (
    <Router>
      <div>
        <StyledNavbar>
          <div className="logo">
            <h4>The nav</h4>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Welcome</a>
            </li>
            <li>
              
            <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          <div>
          <Burger  open={open} setOpen={setOpen} />
          <Menu  open={open} />
          
        </div>
        </StyledNavbar>

        

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