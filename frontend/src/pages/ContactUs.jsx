import ContactusHero from "../components/ContactusHero";
import ContactMap from "../components/products/ContactMap";
import { Helmet } from "react-helmet-async";
export const ContactUs = () => {
  return (
    <div>
      <Helmet>
  <title>Contact Us | Om Kirana Store</title>

  <meta
    name="description"
    content="Contact Om Kirana Store for wholesale grocery supplies in Dausa and Jaipur."
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
       <ContactusHero/>
       <ContactMap/>
    </div>
    );  
}