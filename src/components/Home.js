import React, { Component } from 'react';
import Clock from '../components/Clock';
import Textbox from '../components/Textbox';

import StyledHome from './styles/Home.styled';


export default class Home extends Component {
    render() {
        return (
            <StyledHome className="container mx-auto px-4">
                <Clock />
                    <Textbox>
                        <img alt="placeholder" style={{borderRadius: '50%'}} className=" mx-auto flex justify-center items-center" src="https://picsum.photos/300" />
                    </Textbox>
            </StyledHome>
        )
    }
}
