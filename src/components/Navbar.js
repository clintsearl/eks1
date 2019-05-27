import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';



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
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
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
                  <span className="d-xs">More About Us</span>
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
            

        </header>
        </div>
    );
  }
}

export default Navbar;