import React, {useState}from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    // this.onClick = this.onClick.bind(this);
  }
// for smaller screens
  openNav() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  closeNav() {
    this.setState({
      collapse: false
    })
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              {/* responsive */}
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={()=>{this.openNav()}} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                  <a href='#top' onClick={()=>{this.closeNav()}}><MDBNavbarBrand><strong>Home</strong></MDBNavbarBrand></a>
                  </MDBNavItem>
                  <MDBNavItem>
                  <a href='#about' onClick={()=>{this.closeNav()}}><MDBNavbarBrand>About Us</MDBNavbarBrand></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href='#contact' onClick={()=>{this.closeNav()}}><MDBNavbarBrand>Contact Us</MDBNavbarBrand></a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default Navbar;