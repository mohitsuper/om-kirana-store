import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Headers from './commen/Headers';
import TopBar from './commen/Topbar';
import HeroSection from './components/Hero';
import ShopCategories from './components/ShopCategories';
import FeaturesProducts from './components/FeaturesProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './Commen/Footer';
import ProductInfo from './pages/ProductInfo';
import ReturnPolicy from './pages/ReturnPolicy';
import { ContactUs } from './pages/ContactUs';
import CartSidebar from './commen/CartSidebar';
import Error404 from './pages/Error404';
function App() {
  return (
    <div >
      <TopBar/>
      <Headers />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
