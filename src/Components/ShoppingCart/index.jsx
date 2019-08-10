import React, { Component } from "react";
import EmptyCart from './EmptyCart.js'
import ShoppingCartItem from "../ShoppingCartItem";
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import styles from '../../styles.module.css';
import CheckoutProcess from '../CheckoutProcess';




class ShoppingCart extends Component {
  state = {
    modal14: false
  }
  
  toggle = nr => () => {
    debugger
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    
    let cartItems = this.props.cart.map(product => {
      return (
        <ShoppingCartItem
        imageURL={product.image}
        title={product.title} 
        price={product.price}
        quantity={product.Quantity}
        removeFromCart={this.props.removeFromCart}/>
      );
    });
    let view;
    let showButton = false;
    
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
      showButton = true;
    }
    return (
        <div className={styles.shoppingCartButton}  className="position-fixed float-left" style={{zIndex:100}}>

          <MDBPopover
            placement="bottom"
            popover
            clickable
            id="popper3"
            >
            
              <MDBBtn color="warning">
              <i class="fas fa-shopping-cart"><span class="badge badge-pill ml-2">{cartItems.length}</span></i>
              </MDBBtn>
        
            <MDBContainer >
              <MDBPopoverBody className={styles.shoppingCart}>
                {view}
                {showButton &&
                <MDBBtn variant="contained" color="warning" onClick={this.toggle(14)}>Proceed to checkout</MDBBtn>}
              </MDBPopoverBody>
            </MDBContainer>
          </MDBPopover>
          
          <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
            {/* <MDBModalHeader toggle={this.toggle(14)}>F</MDBModalHeader> */}
            <MDBModalBody>
              <CheckoutProcess orderList={view}
              close={this.toggle(14)}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="warning" onClick={this.toggle(14)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>   
        </div>
    );
  }
}

export default ShoppingCart;
