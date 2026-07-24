import React from 'react';
import HeroSection from '../components/Hero';
import ShopCategories from '../components/ShopCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesProducts from '../components/FeaturesProducts';
import PopularBrands from '../components/PopularBrands';
import Testimonials from '../components/Testimonials';
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="">
      <Helmet>
        <title>
          Om Kirana Store | Wholesale Grocery Supplier in Dausa, Rajasthan
        </title>

        <meta
          name="description"
          content="Om Kirana Store is a trusted wholesale grocery supplier in Dausa, Rajasthan. We provide rice, oil, sugar, spices, pulses, agarbatti and many more at wholesale prices."
        />

        <meta
          name="keywords"
          content="Wholesale Grocery, Kirana Store, Dausa, Rajasthan, Rice, Oil, Sugar, Agarbatti"
        />

        <meta name="author" content="Om Kirana Store" />

        <link rel="canonical" href="https://om-kirana-store.vercel.app/" />
        <meta
          property="og:title"
          content="Om Kirana Store"
        />

        <meta
          property="og:description"
          content="Wholesale Grocery Supplier in Rajasthan"
        />

        <meta
          property="og:image"
          content="https://om-kirana-store.vercel.app/images/banner.jpg"
        />

        <meta
          property="og:url"
          content="https://om-kirana-store.vercel.app"
        />

        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Om Kirana Store"
        />

        <meta
          name="twitter:description"
          content="Wholesale Grocery Supplier"
        />

        <meta
          name="twitter:image"
          content="https://om-kirana-store.vercel.app/images/banner.jpg"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link rel="icon" href="images/icon/favicon.ico" />

      </Helmet>
      <HeroSection />
      <ShopCategories />
      <FeaturesProducts />
      <WhyChooseUs />
      {/* <PopularBrands/> */}
      <Testimonials />
    </div>
  );
}
