import React from 'react';
import ProductsHero from '../components/ProductHero';
import AllProducts from '../components/products/AllProduct';
import { Helmet } from "react-helmet-async";
export default function Products() {
  return (
    <div>
      <Helmet>
  <title>Wholesale Grocery Products | Om Kirana Store</title>

  <meta
    name="description"
    content="Browse our wholesale grocery products including rice, flour, spices, oil, sugar, pulses and agarbatti."
  />

  <link
    rel="canonical"
    href="https://om-kirana-store.vercel.app/products"
  />
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
        <ProductsHero/>
        <AllProducts/>
    </div>
  );
}
