import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBInput
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

const link = {
  width: '120px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'orange',
  textDecoration: 'none',
  color: 'white',
  textAlign: 'center',
}

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
      <MDBNavbar color='white' light outline expand="md">
        <MDBNavbarBrand>
          <NavLink to="/" exact><img src={Logo} alr='Alo-Talabati' className='w-50'/></NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
           <MDBNavLink to="/" exact style={link} activeStyle={{background: 'darkorange'}} >Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/Feedback" exact style={link} activeStyle={{background: 'darkorange'}}>Feedback</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/About" exact style={link} activeStyle={{background: 'darkorange'}}>About</MDBNavLink>
          
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/ContuctUs" exact style={link} activeStyle={{background: 'darkorange'}}>Contuct Us</MDBNavLink>
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
         
                <MDBDropdownToggle color="warning" >
                  <span>Categories</span>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                {Dropdown.map(currentVlaue => 
                  <MDBDropdownItem><NavLink to={currentVlaue.title}>{currentVlaue.title}</NavLink></MDBDropdownItem>
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
    );
  }
}

export default Navbar;