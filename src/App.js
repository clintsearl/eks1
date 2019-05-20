import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import styled from 'styled-components'
import "./index.css";
import logo from "./logo.png";
import Navbar from "./components/Navbar"
import Contact from './components/Contact'
import Welcome from './components/Welcome'
import About from './components/About'


const Wrapper = styled.div`
  background-color:grey;
  hight:200%;
  max-width:100vw
`
class App extends Component {
  render() {
    return (
      // <Wrapper>
        <MDBContainer className='app'>
          <Navbar />
          <MDBRow  id='top' center style={{ height: "100vh" }}>
            <MDBCol middle="true" sm="8" className="text-center">

              <h1>Welcome to Your MDB React App</h1>
              <p className="mb-2">The application is configured and ready to import our components.</p>
              <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol  middle="true" className="text-center">
              <Welcome />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol  middle="true" className="text-center">
              <About />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol  middle="true" className="text-center">
              <Contact />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      // </Wrapper>
    );
  }
}

export default App;
