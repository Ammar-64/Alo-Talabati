import React from 'react';
import Navbar from './Components/Header';
import Categories from './Containers/Categories';
import Product from './Containers/Product';
import Footer from './Components/Footer';
import About from './Components/About';
import ContuctUs from './Components/ContuctUs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import {toast, ToastContainer, MDBNotification } from "mdbreact";
import EmptySpace from './Components/EmptySpace';
import db from './firebase';

const BASE_URL = 'https://firestore.googleapis.com/v1';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      products : null,
      collection: 'Products'
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.fetchProduct()
  }

  fetchProducts = async () => {
    const url = `${BASE_URL}/projects/alo-talabati/databases/(default)/documents/${this.state.type}/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ products: json.documents });
  }

  addToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productTitle = selectedProducts.title;
    let productQty = selectedProducts.Quantity;
    if (this.checkProduct(productTitle)) {
      let index = cartItem.findIndex(x => x.title == productTitle);
      cartItem[index].Quantity =
        Number(cartItem[index].Quantity) + Number(productQty);
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem
    });
  }

  removeFromCart(selectedProducts){
    debugger
    let cartItem = this.state.cart;
    let productTitle = selectedProducts.title;
    let index = cartItem.findIndex(x => x.title == productTitle);
    cartItem.splice(index,1);
    this.setState({
      cart: cartItem
    });

  }

  checkProduct(productTitle) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.title === productTitle;
    });
  }
  
    fetchProduct = async (where) => {
    let res = null;
    if (where) {
      res = await db.collection(this.state.collection).where(...where).get()
    } else {
      res = await db.collection(this.state.collection).get()
    }
    debugger
    this.setState( { products: res.docs } )
  }

  changeCollection = (newCollection) => {
    if (newCollection !== this.state.collection){
      this.setState({ collection: newCollection }, () => this.fetchProduct())
    }
  }

  render(){
    const ShoppingCartRoute = () => <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
    const Grocery = () => <Product type={'Products'} cart={this.state.cart} addToCart={this.addToCart} products={this.state.products} changeCollection={this.changeCollection} />
    const BabyCare = () => <Product type={'BabyProducts'} cart={this.state.cart} addToCart={this.addToCart} products={this.state.products} changeCollection={this.changeCollection} />

  return (
    <div className="bg-light">
       
    <Router>
        <React.Fragment>      
          <Route path="/" component={() => <Navbar fetchProducts={this.fetchProduct} />} />
          <Route path="/" component={EmptySpace} />
          <Route path="/" component={ShoppingCartRoute} />
          <Route exact path="/" component={Categories} />          
          <Route exact path="/Grocery" component={Grocery} />
          <Route exact path="/BabyCare" component={BabyCare} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ContuctUs" component={ContuctUs} />
          <Route path="/" component={Footer} />
        </React.Fragment>
    </Router> 
    </div>
  );
  }
}

export default App;
