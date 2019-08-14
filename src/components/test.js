import React from "react";
import {Wrapper, Navigation} from './MyStyled'


function NavbarPage(){
   return(
   <header>
        <Navigation>
            
             
           
              {/* {!this.state.isWideEnough && <MDBNavbarToggler onClick={()=>{this.openNav()}} />} */}
              {/* <MDBCollapse isOpen={this.state.collapse} navbar>
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
            </MDBNavItem> */}
            {/* <MDBNavItem className="text-justify">
                <NavLogo src={logo}/>
            </MDBNavItem>
            https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
            in time shrink the logo to go up in the navbar
            */}
                {/* </MDBNavbarNav>
              </MDBCollapse> */}
            {/* </MDBNavbar> */}
        </Navigation>

    /// </header>
   )
}
export default NavbarPage;