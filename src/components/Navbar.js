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

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');

        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
        });

    }


export default class Navbar extends Component {
    render() {
        return ( 

        //    { navSlide()}
            <Router>
                
                
            <div >
            
            <nav >
                <div class="logo">
                    <h4>The nav</h4>
        </div>
                    <ul class="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Welcome</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    </ul>
                    <div class="burger">
                    <div class="line1"></div>    
                    <div class="line2"></div>    
                    <div class="line3"></div>    
                    </div>
            
            </nav>

            

            {
                /* A <Switch> looks through its children <Route>s and
                                renders the first one that matches the current URL. */
            } 
            <Switch >
            
            <Route path = "/about" >
            
            <About/>
            
            </Route> 
            <Route path = "/" >
            
            <Home/>
            
            </Route> 
            </Switch> 
            </div> 
            </Router>
        );
    }


}

