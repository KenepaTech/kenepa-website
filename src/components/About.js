import React, { Component } from "react";
import StyledAbout, { Grid, Col, Row } from "./styles/About.styled";
import logo from "../img/meeting4.svg";
import "../tailwind.generated.css";
export default class About extends Component {
  render() {
    return (
      <StyledAbout color="transparent">
        <h1> About Us</h1>
        {/* <Row className="flex flex-wrap -mx-4 mb-4">
          <Col className="mb-4 md:mb-0 px-4 w-1/2 bg-gray-800 h-12 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
            <p>
             
            </p>
          </Col>
          <Col className="mb-4 md:mb-0 px-4 w-1/2 bg-gray-600 h-12 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
            <p>
              banda mei mei
              <img alt="placeholder" src={logo} />
            </p>
          </Col>
          <Col className="mb-4 md:mb-0 px-4 w-1/2 bg-gray-500 h-12 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
            <p>
              banda rechts
              <img alt="placeholder" src={logo} />
            </p>
          </Col>
        </Row> */}
        {/* <Row className="flex flex-wrap -mx-4 mb-4">
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          
         
        </Row>


        <Row className="flex flex-wrap -mx-4 mb-4">
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          <Col className=" px-2 w-1/2 md:w-1/3 lg:w-1/6">
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
          </Col>
          
         
        </Row> */}

        <div class="flex flex-wrap -mx-px overflow-hidden sm:-mx-1 md:-mx-3 lg:-mx-1">
          <div class="my-px px-px w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-3 md:px-3 md:w-full lg:my-1 lg:px-1 lg:w-3/5 xl:w-3/5">
            <p>
              Reprehenderit id aliqua ex esse esse dolore laboris nulla Lorem
              nisi laboris ea. Do dolore nisi ipsum tempor sit sunt dolor id.
              Consequat commodo ad ipsum dolore reprehenderit aliqua nostrud
              minim excepteur laboris consectetur. Excepteur qui labore sunt
              labore et laborum. Do nisi ad reprehenderit tempor fugiat.
              Occaecat cillum dolore do pariatur aliqua. Cillum esse commodo
              ullamco incididunt magna officia sit laborum tempor Lorem dolor
              incididunt in. Consectetur eu deserunt voluptate proident qui anim
              ad cillum aliqua velit ea est pariatur. Nisi non id sunt Lorem
              amet velit anim laborum occaecat officia enim id voluptate
              laboris. Sint non ipsum exercitation aliqua proident duis officia
              consequat ut exercitation labore tempor dolore ipsum. Aliqua ipsum
              laborum reprehenderit eu cupidatat velit. Et veniam culpa cillum
              reprehenderit sunt labore anim quis. In ad magna aliquip in
              reprehenderit anim cupidatat ex eu occaecat sunt. Mollit ut non id
              Lorem esse dolore exercitation velit Lorem mollit irure magna est
              ut. Ad magna laborum reprehenderit proident. 
            </p>
          </div>

          <div class="my-px px-px w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-3 md:px-3 md:w-full lg:my-1 lg:px-1 lg:w-2/5 xl:w-2/5">
            <p>I Am Groot!</p>
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block justify-center h-auto w-full" src={logo} />
          </div>
          
          <div class="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-1 md:px-1 md:w-full lg:my-px lg:px-px lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/2">
            <p>I Am Not Groot!</p>
            <img alt="placeholder" style={{borderRadius: '50%'}} className="block justify-center h-auto w-full" src="https://picsum.photos/1820" />
          </div>
          

          <div class="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-1 md:px-1 md:w-full lg:my-px lg:px-px lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/2">
            <p>
            
              Reprehenderit id aliqua ex esse esse dolore laboris nulla Lorem
              nisi laboris ea. Do dolore nisi ipsum tempor sit sunt dolor id.
              Consequat commodo ad ipsum dolore reprehenderit aliqua nostrud
              minim excepteur laboris consectetur. Excepteur qui labore sunt
              labore et laborum. Do nisi ad reprehenderit tempor fugiat.
              Occaecat cillum dolore do pariatur aliqua. Cillum esse commodo
              ullamco incididunt magna officia sit laborum tempor Lorem dolor
              incididunt in. Consectetur eu deserunt voluptate proident qui anim
              ad cillum aliqua velit ea est pariatur. Nisi non id sunt Lorem
              amet velit anim laborum occaecat officia enim id voluptate
              laboris. Sint non ipsum exercitation aliqua proident duis officia
              consequat ut exercitation labore tempor dolore ipsum. Aliqua ipsum
              laborum reprehenderit eu cupidatat velit. Et veniam culpa cillum
              reprehenderit sunt labore anim quis. In ad magna aliquip in
              reprehenderit anim cupidatat ex eu occaecat sunt. Mollit ut non id
              Lorem esse dolore exercitation velit Lorem mollit irure magna est
              ut. 
            </p>
          </div>
        </div>

        {/* <div class="flex flex-wrap -mx-3  sm:-mx-3 md:-mx-1 lg:-mx-2 xl:-mx-2">

<div class="my-3 px-3 w-1/2  sm:my-3 sm:px-3 sm:w-full md:my-1 md:px-1 md:w-1/3 ">
<img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
</div>

<div class="my-3 px-3 w-1/3 sm:my-3 sm:px-3 sm:w-full md:my-1 md:px-1 md:w-1/3 ">
<img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
</div>

<div class="my-3 px-3 w-1/3  sm:my-3 sm:px-3 sm:w-full md:my-1 md:px-1 md:w-1/3  ">
<img alt="placeholder" style={{borderRadius: '50%'}} className="block h-auto w-full" src="https://picsum.photos/300" />
</div>

</div> */}
      </StyledAbout>
    );
  }
}
