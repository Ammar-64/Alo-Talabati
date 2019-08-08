import React, { Component } from "react";
import EmptyCart from './EmptyCart.js'
import ShoppingCartItem from "../ShoppingCartItem";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import styles from '../../styles.module.css';
{/*import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckoutProcess from '../CheckoutProcess';
import Badge from '@material-ui/core/Badge';*/}




class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
        isDialogOpen: false
    }
  }

  openDialog = () => this.setState({ isDialogOpen: true })
 
  closeDialog = () => this.setState({ isDialogOpen: false })

  render() {
    debugger
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
    debugger
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
      showButton = true;
    }
    return (
        <div className={styles.shoppingCartButton}>

          <MDBPopover
            placement="bottom"
            popover
            clickable
            id="popper3">
            
              <MDBBtn>
              <span badgeContent={cartItems.length} class="badge badge-danger ml-2"><i class="fas fa-shopping-cart"></i></span>
              </MDBBtn>
        
            <MDBContainer >
              <MDBPopoverBody className={styles.shoppingCart}>
                {view}
                {showButton &&
                <MDBBtn variant="contained" color="secondary" onClick={this.openDialog}>Proceed to checkout</MDBBtn>}
              </MDBPopoverBody>
            </MDBContainer>
          </MDBPopover>
          {/*
          <Dialog
            maxWidth="lg"
            open={this.state.isDialogOpen}
            onClose={this.closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogActions>
              <a href="#" onClick={this.closeDialog} color="primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
              </a>
            </DialogActions>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <CheckoutProcess orderList={view}/>
              </DialogContentText>
            </DialogContent>

          </Dialog>
          */}   
        </div>
    );
  }
}

export default ShoppingCart;
