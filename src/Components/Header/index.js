import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBInput
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';
import * as firebase from 'firebase';
import 'firebase/database';
import { debug } from "util";
const firebaseConfig = {
  apiKey: "AIzaSyBnD1RdeD5iNw_y3cahx8ajMebkDyT_dH8",
  authDomain: "alo-talabati.firebaseapp.com",
  databaseURL: "https://alo-talabati.firebaseio.com",
  projectId: "alo-talabati",
  storageBucket: "alo-talabati.appspot.com",
  messagingSenderId: "753646471377",
  appId: "1:753646471377:web:a40c87b191bbb110"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
    this.searchProducts({
      search: this.state.value
    })
  }
}
onChange = e => {
  this.setState({ value: e.target.value })
}
searchProducts = async ({
  search = '',
  limit = 50,
} = {}) => {
  debugger
  const snapshot = await db.collection('Poducts')
    .where('name', '==', search)
    .orderBy('name')
    .limit(limit)
    .get();
    debugger
  return snapshot.docs;
};



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
           <MDBBtn to="/" exact color="warning" >Home</MDBBtn>
            </MDBNavItem>
            <MDBNavItem>
<<<<<<< HEAD
            <MDBBtn to="/About" exact color="warning">About</MDBBtn>
=======
            <MDBNavLink to="/Feedback" exact style={link} activeStyle={{background: 'darkorange'}}>Feedback</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/About" exact style={link} activeStyle={{background: 'darkorange'}}>About</MDBNavLink>
>>>>>>> abae921bb42b0bf53d70e5803a4017cfb5ed6158
          
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn href="/ContuctUs" exact color="warning">Contuct Us</MDBBtn>
              
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