import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { name, img, seller, price, stock, ratings, ratingsCount, category, shipping } = product;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden"
    >
      <figure className="bg-gray-100">
        <img src={img} alt={name} className="h-52 object-contain p-4" />
      </figure>

      <div className="card-body space-y-1">
        <p className="badge badge-secondary w-fit">{category}</p>
        <h2 className="card-title text-lg">{name}</h2>
        <p className="text-sm text-gray-500">Seller: <span className="text-gray-700">{seller}</span></p>

        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          <FaStar /> <span>{ratings}</span>
          <span className="text-gray-400">({ratingsCount})</span>
        </div>

        <div className="text-base font-semibold text-green-600">${price}</div>
        <div className="text-xs text-gray-500">In Stock: {stock} | Shipping: ${shipping}</div>

        <div className="card-actions justify-end pt-3">
          <button className="btn btn-primary btn-sm flex items-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
