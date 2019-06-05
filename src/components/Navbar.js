import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';

const color = "blue lighten-3"

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
      
      
            <MDBNavbar color={color} dark fixed='top' expand="md" scrolling transparent >
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
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
   
    );
  }
}

export default Navbar;