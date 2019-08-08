import React from "react";
import Counter from '../Counter';
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip , MDBContainer} from "mdbreact";
import Styles from './styles.module.css';

class Product extends React.Component{

  state = {
    selectedProduct: {},
    isAdded: false,
    quantity: 1
  };


  increment() {
    this.setState((state) => {
        return {quantity: state.quantity + 1};
      });
  }

  decrement() {
    if (this.state.quantity <= 1) {
      return this.state.quantity;
    } else {
        this.setState((state) => {
            return {quantity: state.quantity - 1};
          });
    }
  }

  addToCart(image, name, price, quantity) {
    this.setState(
    {
        selectedProduct: {
        image: image,
        title: name,
        price: price,
        Quantity: quantity
        }
    },
    function() {
        this.props.addToCart(this.state.selectedProduct);
    }
    );
    this.setState(
    {
        isAdded: true
    }
    );
}

    render(){     
      const { title, imageURL, details, price } = this.props   
        return (
        <MDBContainer  className="my-3 px-n5" >
          <MDBCard wide ecommerce>
            <div>
            <MDBCardImage
              cascade
              src={imageURL}
              top
              alt={title}
              className={Styles.img}
            />
            </div>
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
                <strong>
                  {title}
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                {details}
                <span className="font-weight-bold my-n2"><br />
                  <strong>{price} TRY</strong>
                </span>
              </MDBCardText>
              <MDBCardFooter>               
                <span>
                <Counter 
                quantity={this.state.quantity}
                incrementQuantity={this.increment.bind(this)}
                decrementQuantity={this.decrement.bind(this)}/>
                <MDBBtn size="md" color='warning' onClick={this.addToCart.bind(
                      this,
                      imageURL,
                      title,
                      price,
                      this.state.quantity                        
                      )}>add to cart</MDBBtn>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
    </MDBContainer>
  );
}
}
export default Product;