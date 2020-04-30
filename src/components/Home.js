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

                    {/* <img src="https://i.gyazo.com/2e9f4f175dae62e3bbdbff114ac7b817.png" alt="husky"/> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque enim non scelerisque iaculis. Ut sit amet magna a neque aliquam sagittis. Pellentesque condimentum quam non tincidunt egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla suscipit euismod venenatis. Integer in dui laoreet, sollicitudin quam ut, sodales sapien. Praesent quis felis erat. Nullam a congue sapien. Pellentesque vehicula dapibus blandit. Suspendisse potenti. Quisque ut ex id velit euismod dapibus. Vivamus id libero in quam rhoncus facilisis. Morbi tincidunt hendrerit congue. Mauris varius diam mattis volutpat ullamcorper.
                     Etiam in velit et nisi bibendum dictum eget ut purus. Vivamus ultricies, nunc laoreet commodo suscipit, arcu eros dictum arcu, non rhoncus mauris arcu ac velit. Nunc ornare augue sit amet elit sollicitudin semper. Nulla magna nunc, finibus nec tellus vitae, lacinia maximus enim. Nunc eget auctor urna. Praesent vitae lacus diam. Aliquam imperdiet, quam sit amet efficitur pulvinar, dolor velit malesuada arcu, at laoreet nibh ipsum nec odio. Fusce ultricies, sem ut sollicitudin eleifend, mi sem laoreet velit, eget vestibulum massa est at sem. Curabitur eu mi lectus. Phasellus quis vestibulum ante, nec sollicitudin est. Donec sed commodo ante, ac ultrices ex. Aliquam a laoreet neque. Vivamus consectetur, ligula eget bibendum pretium, velit tellus fringilla arcu,
                    sollicitudin sagittis diam dui id risus. Aenean non mi in dolor blandit maximus. Aliquam faucibus venenatis tortor aliquet consequat.</p>
                </Textbox>
            </StyledHome>
        )
    }
}
