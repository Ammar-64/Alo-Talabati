import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBInput
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';

import { debug } from "util";

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
constructor(){
  super();
  this.state = {searchInput: ''};
  this.search = this.search.bind(this);
 }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
search = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    console.log('searchProducts')
    this.props.fetchProducts(['title', '==', this.state.value])
  }
}
onChange = e => {
  this.setState({ value: e.target.value })
}
render(){
   
const ShoppingCartRoute = () => <ShoppingCart cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>

  return (
      <MDBNavbar color='white' scrolling fixed="top" light outline expand="md">
        <MDBNavbarBrand>
          <NavLink to="/" exact><img src={Logo} alr='Alo-Talabati' className='w-50'/></NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
           <MDBBtn href="/" exact color="warning" >Home</MDBBtn>
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="/About" exact color="warning">About</MDBBtn>
          
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="/ContuctUs" exact color="warning">Contuct Us</MDBBtn>
              
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="/Feedback" exact color="warning">Feedback</MDBBtn>
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
         
                <MDBDropdownToggle color="warning" caret>
                  <span>Categories</span>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                {Dropdown.map(currentVlaue => 
                  <MDBDropdownItem><NavLink to={currentVlaue.title}>{currentVlaue.title}</NavLink></MDBDropdownItem>
                )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
           
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>

          </MDBNavItem>
            <MDBNavItem>
            <form class="form-inline">
                <div class="md-form my-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.onChange} onKeyDown={this.search}></input>
                </div>
              </form>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    );
  }
}

export default Navbar;