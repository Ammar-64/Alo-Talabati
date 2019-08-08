import React from 'react';
import BabyProduct from '../BabyProduct';
import styles from '../../styles.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Banana from '../../img/Grocery/Banana.png';
import Orange from '../../img/Grocery/Orange.png';
import Tomato from '../../img/Grocery/Tomato.png';



const Cards = [
  {title: "BabyOil", 
   imageURL: Banana,
   details: "1 piece",
   price: '13'},
   {title: "Pampers", 
   imageURL: Orange,
   details: "1 kg",
   price: '13'},
   {title: "FeedingBottle", 
   imageURL: Tomato,
   details: "1 kg",
   price: '13'},
   
]


class BabyProducts extends React.Component{
    state = {
        quantity: 1,
    };
    
    componentDidMount(){
    //   let response = await fetch("https://firestore.googleapis.com/v1/projects/portfolio-mujz/databases/(default)/documents/projects/");
    //   let json = await response.json();
    this.updateQuantity = this.updateQuantity.bind(this);
    }

    //Reset Quantity
    updateQuantity(qty) {
        console.log("quantity added...");
        this.setState({
        quantity: qty
        });
    }

    render(){
        return (
          <MDBContainer className={styles.body_container}>
            <MDBRow>
            {
              Cards.map(function(currentValue){
                  console.log(this);
                return (<MDBCol md="4">
                  <BabyProduct 
                  imageURL={currentValue.imageURL}
                  title={currentValue.title} 
                  details={currentValue.details} 
                  price={currentValue.price}
                  quantity={this.state.quantity}
                  updateQuantity={this.updateQuantity}
                  />
                </MDBCol>)
              }.bind(this))
            }
          </MDBRow>
          </MDBContainer>
        )
    }
}

export default BabyProducts;