import React from 'react';
import styles from '../../styles.module.css'
import { MDBContainer, MDBIcon } from "mdbreact"


class Product extends React.Component{

    state = {
        selectedProduct: {},
        isAdded: true,
      };

    removeFromCart(name) {
        this.setState(
        {
            selectedProduct: {
            title: name,
            }
        },
        function() {
            this.props.removeFromCart(this.state.selectedProduct);
        }
        );
        this.setState(
        {
            isAdded: false
        }
        );
    }


    render(){
        debugger
        let totalPrice = parseInt(this.props.quantity) * parseFloat(this.props.price);
        return (
                <MDBContainer align="center" className={styles.cartItem}>
                    <MDBContainer> 
                    <img src={this.props.imageURL} height="42" width="42"/>
                    </MDBContainer>
                    <MDBContainer>
                    <p variant="h5" component="h5">
                        {this.props.title}
                    </p>
                    </MDBContainer>
                    <MDBContainer>
                    <p variant="body2" component="h6">
                        Quantity : {this.props.quantity}
                    </p>
                    </MDBContainer>
                    <p variant="body2" color="textSecondary" component="p">
                        Price : {this.props.price}
                    </p> 
                    <p variant="body2" color="textSecondary" component="p">
                        Total price : {totalPrice}
                    </p>
                    <a href="#" onClick={this.removeFromCart.bind(this,this.props.title)}>
                    <MDBIcon icon="trash-alt" /></a>            
                </MDBContainer>
        )
    }
}

export default Product;