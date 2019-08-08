import React from 'react';
import Navbar from './Components/Header';
import Products from './Containers/Products';
import Categories from './Containers/Categories';
import BabyProducts from './Containers/BabyProducts';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="bg-light">   
       <Navbar />
       <Products />
       <BabyProducts/>
       <Categories />      
       <Footer />
    </div>
  );
}

export default App;
