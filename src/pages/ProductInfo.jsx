import React from 'react';
import ProductDetailsHero from '../components/products/ProductsHero';
import ProductInformation from '../components/products/ProductsInfo';
import RelatedProducts from '../components/products/RelatedProducts';
import products from '../data/product';
import { useParams } from 'react-router-dom';

export default function ProductInfo() {
   const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );  
  const categoryProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
  return (
    <div>
        <ProductDetailsHero/>
        <ProductInformation product={product}/>
        <RelatedProducts categoryProducts={categoryProducts}/>
    </div>
  );
}
