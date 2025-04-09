import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage ] = useState(9) ;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(`https://server-job-portal.vercel.app/products?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [currentPage, itemsPerPage]);

    const handlePageChange = (event) => {
    const value = parseInt(event.target.value);
    setItemsPerPage(value);
    setCurrentPage(0); // Reset to the first page when items per page changes
    }

    const handlePrevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    }
    const handleNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
        }
  return (
    <div>
      <h2 className="text-2xl font-bold m-4 text-center">
        Feature Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center">
        <p>Current page: {currentPage} </p>
        <button onClick={handlePrevPage} className="btn btn-sm btn-outline" >Prev</button>
        {pages.map((page) => (
          <button key={page}
          onClick={() => setCurrentPage(page )}
          className={`btn btn-sm m-2 ${page === currentPage ? 'btn-primary' : 'btn-outline'}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn btn-sm btn-outline" >Next</button>
        <select value={itemsPerPage} onChange={handlePageChange} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
