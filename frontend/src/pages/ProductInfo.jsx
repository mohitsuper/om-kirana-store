import React, { useEffect, useState } from 'react';
import ProductDetailsHero from '../components/products/ProductsHero';
import ProductInformation from '../components/products/ProductsInfo';
import RelatedProducts from '../components/products/RelatedProducts';
import { useParams } from 'react-router-dom';
import { GetProduct, GetProducts } from '../axois/axois';

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await GetProduct(id);
        const p = res.data;
        setProduct(p);

        // fetch all products and filter by category
        const all = await GetProducts();
        const prodList = all.data || [];
        const relatedList = prodList.filter((item) => item._id !== p._id && item.category === p.category);
        setRelated(relatedList);
      } catch (err) {
        console.error('Failed to load product details', err);
      }
    };
    fetch();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // map product to the UI shape expected by ProductInformation
  const mapped = {
    id: product._id,
    name: product.productName,
    image: product.imageUrl?.url,
    price: product.price,
    minOrder: product.minimumOrder,
    description: product.description,
    category: product.category
  };

  return (
    <div>
      <ProductDetailsHero />
      <ProductInformation product={mapped} />
      <RelatedProducts categoryProducts={related.map((p) => ({
        id: p._id,
        name: p.productName,
        image: p.imageUrl?.url,
        price: p.price,
        minOrder: p.minimumOrder
      }))} />
    </div>
  );
}
