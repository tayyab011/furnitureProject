import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from "./ProductCard";
import useProduct from '../hooks/useProduct';

const Home = () => {
/*  const products =useLoaderData(); */

const {products,loading,error}=useProduct()
 const sliceProduct =products.slice(0,6)
console.log(products);
    return (
      <div >
        <div className="flex justify-between items-center py-5 px-3">
          <h1 className="md:text-3xl text-xl font-bold  ">Featcher Product</h1>

          <Link
            className="btn btn-info hover:scale-110 hover:ease-in-out"
            to="/product"
          >
            See All product
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-5 px-3">
          {sliceProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Home;
