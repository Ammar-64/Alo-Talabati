import React from 'react';
import Navbar from './Components/Header';
import Categories from './Containers/Categories';
import Product from './Containers/Product';
import Footer from './Components/Footer';
import About from './Components/About';
import ContuctUs from './Components/ContuctUs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Grocery = () => <Product type={'Products'} />
const BabyCare = () => <Product type={'BabyProducts'} />

function App() {
  return (
    <div className="bg-light">
       
    <Router>
        <React.Fragment>      
          <Route path="/" component={Navbar} />
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

export default App;
