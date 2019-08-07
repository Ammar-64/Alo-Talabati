import React from 'react';
import Navbar from './Components/Header';
import Products from './Components/Products';
import Categories from './Components/Categories';
import BabyProducts from './Components/BabyProducts';
import ContactPage from './Components/ContuctUs';
import Footer from './Components/Footer';
import About from './Components/Aboutus';


function App() {
  return (
    <div className="bg-amber">   
       <Navbar />
       <Products />
       <Categories />
       <BabyProducts/>
       <ContactPage/>
       <About/>
       <Footer />
    </div>
  );
}

export default App;
