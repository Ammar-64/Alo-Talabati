import React from 'react';
import Navbar from './Components/Header';
import Products from './Components/Products';
import Categories from './Components/Categories';
import BabyProducts from './Components/BabyProducts';
import ContactPage from './Components/ContuctUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
       <Navbar />
       <Products />
       <Categories />
       <BabyProducts/>
       <ContactPage/>
       <Footer />
    </div>
  );
}

export default App;
