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
import classnames from "classname"


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


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


export default Navbar;