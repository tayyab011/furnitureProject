import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from "./ProductCard";

const Home = () => {
 const products =useLoaderData();
 console.log(products);
    return (
      <div className="">
        <div>
          <h1>Featcher Product</h1>

          <Link to="">See All product</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-5 px-3">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    );
};

export default Home;
