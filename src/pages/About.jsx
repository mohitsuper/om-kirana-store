import React from 'react';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import MissionVision from '../components/MissionVision';
import Gallery from '../components/Gallery';
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <div>
      <Helmet>
  <title>About Us | Om Kirana Store</title>

  <meta
    name="description"
    content="Learn more about Om Kirana Store, your trusted wholesale grocery supplier in Rajasthan."
  />

  <link
    rel="canonical"
    href="https://om-kirana-store.vercel.app/about"
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
        <AboutHero/>
        <WhoWeAre/>
        <MissionVision/>
        <Gallery/>
    </div>
  );
}
