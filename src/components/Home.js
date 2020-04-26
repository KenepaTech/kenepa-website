import React, { Component } from 'react';
import Clock from '../components/Clock';
import Textbox from '../components/Textbox';

import StyledHome from './styles/Home.styled';


export default class Home extends Component {
    render() {
        return (
            <StyledHome>
                <Clock />
                <Textbox>
                    <p className="welcome">Welcome to Kenepa Tech!</p>

                    <img src="https://i.gyazo.com/2e9f4f175dae62e3bbdbff114ac7b817.png" alt="husky"/>
                
                </Textbox>
            </StyledHome>
        )
    }
}
