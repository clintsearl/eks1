import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styled from 'styled-components'
import "../index.css";
import Navbar from "./Navbar"
import Contact from './Contact'
import Welcome from './Welcome'
import About from './About'


const Wrapper = styled.div`
  background-color:grey;
  hight:200%;
`
const Logo = styled.div`
  justify-content:center;
`
class Home extends Component {
  render() {
    return (

      <MDBContainer className='app'>
        <Navbar />
        <MDBRow id='top' center>
          <MDBCol middle="true" sm="8" className="text-center">
            <h1>Welcome to Your MDB React App</h1>
            <p className="mb-2">The application is configured and ready to import our components.</p>
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

export default Home;
