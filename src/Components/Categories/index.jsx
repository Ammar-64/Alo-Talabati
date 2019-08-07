import React from 'react';
import Category from '../Category';
import styles from '../../styles.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Grocery from '../../img/Grocery.png';
import Food from '../../img/Food.png';
import Sweets from '../../img/Sweets.png';
import Flowers from '../../img/Flowers.png';
import Gifts from '../../img/Gifts.png';
import Tech from '../../img/Tech.png';
import Drinks from '../../img/Drinks.png';
import Toys from '../../img/Toys.png';
import BabeCare from '../../img/BabeCare.png';


const Cards = [
    {title: "Food", 
     imageURL: Food,
     
     },
    {title: "BabyCare", 
    imageURL: BabeCare,
      },
    {title: "flower", 
    imageURL: Flowers,
   },
   {title: "grocery", 
     imageURL: Grocery,
     },
    {title: "sweets", 
    imageURL: Sweets,
      },
    {title: "gifts", 
    imageURL: Gifts,
   },
   {title: "tech", 
     imageURL: Tech,
     },
    {title: "drinks", 
    imageURL: Drinks,
      },
    {title: "toys", 
    imageURL: Toys,
   },
  ]

class Categories extends React.Component{
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
                  <Category 
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

export default Categories;