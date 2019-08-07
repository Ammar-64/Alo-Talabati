import React from 'react';
import Product from '../Product';
import styles from '../../styles.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Banana from '../../img/Grocery/Banana.png';
import Orange from '../../img/Grocery/Orange.png';
import Tomato from '../../img/Grocery/Tomato.png';
import Juice from '../../img/Grocery/Juice.png';
import Potato from '../../img/Grocery/Potato.png';
import Milk from '../../img/Grocery/Milk.png';
import Sugar from '../../img/Grocery/Sugar.png';
import Bread from '../../img/Grocery/Bread.png';
import Water from '../../img/Grocery/Water.png';


const Cards = [
  {title: "Banana", 
   imageURL: Banana,
   details: "1 kg",
   price: '13'},
   {title: "Orange", 
   imageURL: Orange,
   details: "1 kg",
   price: '13'},
   {title: "Tomato", 
   imageURL: Tomato,
   details: "1 kg",
   price: '13'},
   {title: "Juice", 
   imageURL: Juice,
   details: "1 kg",
   price: '13'},
   {title: "Potato", 
   imageURL: Potato,
   details: "1 kg",
   price: '13'},
  {title: "Milk", 
  imageURL: Milk,
  details: "1 kg",
  price: '6'},
  {title: "Sugar", 
  imageURL: Sugar,
  details: "1 peice",
  price: '5'},
  {title: "Bread", 
  imageURL: Bread,
  details: "1 peice",
  price: '5'},
  {title: "Water", 
  imageURL: Water,
  details: "1 peice",
  price: '5'},
]


class Products extends React.Component{
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
                  <Product 
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

export default Products;