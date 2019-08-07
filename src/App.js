import React from 'react';
import Navbar from './Components/Header';
import Products from './Components/Products';
import Categories from './Components/Categories'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="bg-amber">   
       <Navbar />
       <Products />
       <Categories />
       <Footer />
    </div>
  );
}

export default App;
