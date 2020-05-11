import React, { Component } from "react";
import StyledAbout, { Grid, Col, Row } from "./styles/About.styled";
import logo from "../img/meeting4.svg";
import "../tailwind.generated.css";
export default class About extends Component {
  render() {
    return (

      <StyledAbout color="transparent">
        <h1> About Us</h1>
        <Grid > 
          <Row className="flex mb-4" >
            <Col className="w-1/2 bg-gray-400 h-12 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2">
              <p>
                Ad velit mollit id mollit nostrud elit fugiat amet incididunt voluptate pariatur occaecat fugiat. Officia sit commodo dolore nisi elit qui qui duis culpa incididunt. Tempor sint et ex deserunt irure. Aliqua eu dolore irure non quis nisi ea id. Dolore pariatur incididunt irure commodo duis. Id officia reprehenderit reprehenderit qui magna ut ullamco id reprehenderit et eiusmod do.

Veniam irure qui excepteur cupidatat ut Lorem irure esse velit. Elit aliqua in proident laboris ex cupidatat deserunt nisi eiusmod aliqua. Ut tempor mollit labore velit culpa eu esse. Sunt culpa ad ullamco consectetur nisi Lorem id. Esse eiusmod velit non laboris esse veniam labore irure pariatur tempor laboris et. Fugiat reprehenderit dolore ullamco sint exercitation.

Fugiat occaecat do do ut adipisicing reprehenderit Lorem do labore. Nulla ea occaecat qui laboris duis non. Consectetur amet consectetur deserunt do aliqua cillum est elit id id labore. Et aliquip commodo adipisicing est irure officia ex aliqua officia sint ea enim veniam.

Laboris est ut labore proident Lorem non irure sit Lorem qui sunt adipisicing nulla. Ad in duis do laborum et occaecat. Ullamco ipsum eiusmod officia occaecat ullamco anim amet laboris minim ad ut do laborum occaecat.
              </p>
            </Col>
            <Col className=" w-1/2 bg-gray-500 h-12 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2">
            <p> 
                banda rechts
       <img alt="placeholder" src={logo} />

            </p>
            </Col >
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Grid>
      </StyledAbout>
    );
  }
}
