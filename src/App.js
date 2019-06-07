import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styled from 'styled-components'
import "./index.css";
import Navbar from "./components/Navbar"
import Contact from './components/Contact'
import Welcome from './components/Welcome'
import About from './components/About'
import NavbarPage from "./components/test";
import logo from './assets/3X1.5.png'
import {LogoTag, LogoWrapper} from './components/MyStyled'


const Wrapper = styled.div`
  background-color:grey;
  hight:200%;
`
class App extends Component {
  render() {
    return (

      <MDBContainer className='app'>
        {/* <Navbar /> */}
        {/* <NavbarPage/> */}
        <MDBRow id='top' center>
          <MDBCol middle="true" className="text-center">
            <LogoWrapper>
            <LogoTag src={logo} alt='eKnowledge Solutions Logo'/>
            </LogoWrapper>
            {/* <h1>Welcome to Your MDB React App</h1>
            <p className="mb-2">The application is configured and ready to import our components.</p> */}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol middle="true" className="text-center p-0 m-0" >
            <Welcome />
          </MDBCol>
        </MDBRow>
        <MDBRow className="picWelcome" >
        </MDBRow>
        <MDBRow>
          <MDBCol middle="true" className="text-center p-0 m-0">
            <About />
            <div className="picAbout"></div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol middle="true" className="text-center p-0 m-0">
            <Contact />
            <div className="picContact"></div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
