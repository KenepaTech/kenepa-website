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
                    {/* <p className="welcome">Welcome to Kenepa Tech!</p> */}

                    {/* <img src="https://i.gyazo.com/2e9f4f175dae62e3bbdbff114ac7b817.png" alt="husky"/> */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a congue nisl. Suspendisse imperdiet tristique metus, et malesuada tellus euismod a. Sed congue semper vehicula. Maecenas pellentesque tempus metus, vitae tristique urna imperdiet sed. In eget rhoncus quam. Vivamus commodo eros ut nunc dictum ornare. Nunc tellus enim, placerat vitae bibendum aliquam, aliquet et ante. Mauris sit amet velit nec arcu finibus tincidunt at ac urna. Morbi feugiat risus quis est aliquam, non lacinia risus ullamcorper. In hac habitasse platea dictumst. Donec efficitur lorem ut tincidunt elementum. Vivamus diam ipsum, fermentum non quam tincidunt, eleifend interdum urna. Vestibulum eget mi rutrum, luctus diam dignissim, porta leo.

Nam interdum risus sed neque imperdiet tincidunt. Vivamus fringilla ultrices nisi, in gravida justo pulvinar ac. In non dui egestas, venenatis urna at, iaculis turpis. Ut sed odio id felis semper venenatis eget vehicula mi. Proin et massa id sem pellentesque suscipit eget ut massa. Pellentesque tempor dapibus orci eget convallis. Nunc maximus elit lacinia ex pretium luctus tristique eu quam. Fusce sagittis ullamcorper metus a pulvinar. Fusce eget tempus purus. Nam pellentesque risus at eros rhoncus convallis. Vestibulum mollis lectus sed tortor commodo dapibus.

Sed quam magna, ullamcorper et interdum quis, vehicula vitae sem. Quisque dapibus ac sapien eget scelerisque. Aliquam mauris neque, lacinia sit amet blandit at, maximus volutpat quam. Aenean quam nisl, vehicula non vestibulum et, tincidunt sed diam. Sed non odio eu nisl mollis feugiat vel vitae eros. Vestibulum id risus sit amet quam imperdiet gravida. Aenean purus purus, suscipit ac suscipit et, eleifend sit amet nibh. Quisque mollis neque justo, gravida mollis urna cursus ut.

Etiam urna tortor, porta eget leo malesuada, efficitur pharetra leo. Quisque eleifend dui sit amet elementum molestie. Sed ornare vehicula convallis. Phasellus condimentum felis at blandit vehicula. Pellentesque sagittis augue vulputate varius ultricies. Sed pellentesque consequat quam eget consectetur. Maecenas efficitur, lacus auctor blandit iaculis, lectus orci commodo massa, ac placerat neque odio a odio. Donec congue massa velit, et laoreet nulla volutpat sed. Curabitur eget pharetra libero, at hendrerit lectus. Integer et ex sagittis, lobortis lacus non, dapibus dui. Cras ante urna, ullamcorper at convallis ac, congue at libero. Aliquam sit amet elit quis nunc vehicula gravida.

Aliquam ac erat orci. Donec dictum felis eget leo tincidunt tincidunt. Integer rutrum, odio ac pulvinar sagittis, elit justo egestas turpis, quis vulputate nulla massa non nibh. Ut id tortor ullamcorper, aliquet est quis, sagittis erat. Maecenas urna ex, vulputate ac facilisis eu, venenatis sed dolor. Sed diam turpis, mollis id mauris sed, placerat molestie nulla. Donec sit amet dolor vehicula, sollicitudin tortor a, vehicula augue. Quisque luctus ipsum rutrum, lobortis turpis quis, tincidunt libero. Praesent augue neque, semper sed luctus sit amet, condimentum sed ipsum. Nulla cursus facilisis fermentum. Cras eu ex facilisis, dictum leo at, gravida urna. Proin sit amet bibendum nibh. Suspendisse dapibus elit et metus sollicitudin vulputate.
                </Textbox>
            </StyledHome>
        )
    }
}
