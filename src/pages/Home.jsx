import React from 'react';
import HeroSection from '../components/Hero';
import ShopCategories from '../components/ShopCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesProducts from '../components/FeaturesProducts';
import PopularBrands from '../components/PopularBrands';
import Testimonials from '../components/Testimonials';
export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <ShopCategories/>
      <FeaturesProducts/>
      <WhyChooseUs/>
      {/* <PopularBrands/> */}
      <Testimonials/>
    </div>
  );
}
