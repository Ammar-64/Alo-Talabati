import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBInput
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../../img/logo.png'


const Dropdown = [
  { a:'#',
  title: 'Food',
},
{ a:'#',
  title: 'Drinks',
},
{ a:'#',
  title: 'Grocery',
},
{ a:'#',
  title: 'Sweets',
},
{ a:'#',
  title: 'BabyCare',
},
{ a:'#',
  title: 'Flowers',
},
{ a:'#',
  title: 'Gifts',
},
{ a:'#',
  title: 'Tech',
},
{ a:'#',
  title: 'Toys',
}

]
class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {
  return (
    <Router>
      <MDBNavbar color='white' light outline expand="md">
        <MDBNavbarBrand>
          <a href='#!' ><img src={Logo} alr='Alo-Talabati' className='w-50'/></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active >
            <MDBBtn href="#" color="warning" active>
            Home
      </MDBBtn>{/*<MDBNavLink to="#!" outline color="warning">Home</MDBNavLink>*/}
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="#"  color="warning">
            About Us
      </MDBBtn>
          
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="#"  color="warning">
            Contact Us
      </MDBBtn>
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
         
                <MDBDropdownToggle color="warning" caret>
                  <span className="mr-2">Categories</span>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                {Dropdown.map(currentVlaue => 
                  <MDBDropdownItem href={currentVlaue.a}>{currentVlaue.title}</MDBDropdownItem>
                )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">               
                <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />   
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;