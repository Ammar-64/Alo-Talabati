import React from "react";
import Counter from '../Counter';
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

class Product extends React.Component{
    componentDidMount(props){

    }

    increaseFavorite = () =>{
        this.setState({ favoriteCount: this.state.favoriteCount + 1});
    }

    render(){        
        let quantity = this.props.quantity;
        let updateQuantity = this.props.updateQuantity;
        return (
      <MDBRow my-5>
        <MDBCol md="12" className="mb-lg-0 my-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={this.props.imageURL}
              top
              alt={this.props.title}
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
                <strong>
                  <a href="#">{this.props.title}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                {this.props.details}
              </MDBCardText>
              <MDBCardFooter className="px-1 py-4">
                <span className="float-left font-weight-bold my-n2">
                  <strong>{this.props.price} TRY</strong>
                </span>
                <span className="float-right my-n3">
                <Counter lassName="my-n3"
                         Quantity={quantity}
                         UpdateQuantity={updateQuantity}/>
                         <MDBBtn size="sm">add to cart</MDBBtn>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </MDBRow>
  );
}
}
export default Product;