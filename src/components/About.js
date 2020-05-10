import React, { Component } from 'react';
import StyledAbout, { Grid, Col, Row } from './styles/About.styled';
import fun from '../img/meeting4.svg'
export default class About extends Component {
    render() {
        return (
            <StyledAbout color="transparent">
            <h1 > About Us</h1>
            <Grid>
                <Row>
                    <Col size={7} className="intro" >
                        <p>  Fugiat cupidatat aliquip ut veniam. Ullamco veniam reprehenderit consequat fugiat et labore dolore irure ea commodo esse. Dolore fugiat id ad in amet deserunt. Reprehenderit nisi sit ullamco enim occaecat et velit dolor amet est nulla ex aliqua. Et sit aute pariatur nisi occaecat esse exercitation in officia et quis elit nulla. Labore ullamco culpa ut et dolor aute ex consequat. Irure nostrud qui laborum incididunt officia sunt proident qui minim id sint anim cupidatat voluptate. Excepteur velit minim nulla labore Lorem quis quis aliqua laboris nulla anim dolore. Elit elit voluptate non adipisicing excepteur ea aliqua duis. Velit minim deserunt labore est in esse consectetur magna sit sunt qui.
                        Sit nostrud officia incididunt consequat adipisicing. Occaecat adipisicing ipsum deserunt quis. Nulla exercitation deserunt veniam labore. Sunt incididunt est excepteur anim eiusmod aliquip esse nisi. Fugiat aute reprehenderit adipisicing nostrud in magna quis ex ut.
                        Laboris Lorem et id mollit consectetur reprehenderit Lorem. Sunt anim eu dolor minim nulla elit. Deserunt adipisicing non non ipsum eiusmod nisi.      </p>
                        {/* Hello */}
                    </Col>
                    <Col size={5} >
                    {/* <img alt="placeholder"  src="https://picsum.photos/500/500" /> */}
                    <img alt="placeholder"   src={fun} />
                    </Col>
                </Row>
                <Row>
                    <Col size={5} collapse="xs">
                        {/* meh */}
                    </Col>
                    <Col size={8}>
                       {/* alright */}
                    </Col>
                </Row>

              
            </Grid>
            </StyledAbout>
        )
    }
}
