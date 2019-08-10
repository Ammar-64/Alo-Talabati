import React from 'react';
import Product from '../Product';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Products extends React.Component{

  state = {
      quantity: 1,
  };
  
  componentDidMount(){
  //   let response = await fetch("https://firestore.googleapis.com/v1/projects/portfolio-mujz/databases/(default)/documents/projects/");
  //   let json = await response.json();
  this.updateQuantity = this.updateQuantity.bind(this);
  };

  //Reset Quantity
  updateQuantity(qty) {
      console.log("quantity added...");
      this.setState({
      quantity: qty
      });
  };

  render(){
    const {products} = this.props;
     return (
          <MDBContainer className="px-n5" >  
          <MDBRow className ="justify-content-md-center">   
            {
              products.map(product => (
                 <MDBCol md="3">
                  <Product 
                  imageURL={product.fields.imageURL.stringValue}
                  title={product.fields.title.stringValue} 
                  details={product.fields.details.stringValue} 
                  price={product.fields.price.integerValue}
                  quantity={this.state.quantity}
                  updateQuantity={this.updateQuantity}
                  addToCart={this.props.addToCart}
                  />
                </MDBCol>)
              )
            }
          </MDBRow>
          </MDBContainer>
        )
    }
  }

export default Products;