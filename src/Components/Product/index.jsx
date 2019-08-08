import React from "react";
import Counter from '../Counter';
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip , MDBContainer} from "mdbreact";
import Styles from './styles.module.css';

class Product extends React.Component{
    componentDidMount(props){

    }

    increaseFavorite = () =>{
        this.setState({ favoriteCount: this.state.favoriteCount + 1});
    }

    render(){     
      const { title, imageURL, details, price } = this.props   
        let quantity = this.props.quantity;
        let updateQuantity = this.props.updateQuantity;
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
                         Quantity={quantity}
                         UpdateQuantity={updateQuantity}/>
                         <MDBBtn size="md" color='warning'>add to cart</MDBBtn>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
    </MDBContainer>
  );
}
}
export default Product;