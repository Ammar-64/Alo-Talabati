import React from 'react';
import Navbar from './Components/Header';
import Products from './Containers/Products';
import Categories from './Components/Categories';
import BabyProducts from './Components/BabyProducts';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="bg-light">   
       <Navbar />
       <Products />
       <Categories />
       <BabyProducts/>

 
       <Footer />
    </div>
  );
}

export default App;
