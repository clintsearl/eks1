import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact'; 
import {NavLogo} from '../components/MyStyled'
import logo from '../assets/Logo.svg'
const LogoRed= "black"

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
      
      
            <MDBNavbar 
            color={LogoRed}
             dark fixed='top' expand="md" scrolling transparent >
              {/* responsive */}
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={()=>{this.openNav()}} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                  <a href='/#top' onClick={()=>{this.closeNav()}}><MDBNavbarBrand><strong>Home</strong></MDBNavbarBrand></a>
                  </MDBNavItem>
                  <MDBNavItem>
                  <a href='/#about' onClick={()=>{this.closeNav()}}><MDBNavbarBrand>About Us</MDBNavbarBrand></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href='/#contact' onClick={()=>{this.closeNav()}}><MDBNavbarBrand>Contact Us</MDBNavbarBrand></a>
                  </MDBNavItem>
                  <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">More About Us</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/AnneProfile">Anne</MDBDropdownItem>
                  <MDBDropdownItem href="/EricProfile">Eric</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            {/* <MDBNavItem className="text-justify">
                <NavLogo src={logo}/>
            </MDBNavItem>
            https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
            in time shrink the logo to go up in the navbar
            */}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
   
    );
  }
}

export default Navbar;