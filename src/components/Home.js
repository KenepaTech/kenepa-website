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
     
                    </Textbox>
            </StyledHome>
        )
    }
}
