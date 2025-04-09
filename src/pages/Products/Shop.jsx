import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://server-job-portal.vercel.app/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold m-4 text-center">Feature Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {products.map(product => (        
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
