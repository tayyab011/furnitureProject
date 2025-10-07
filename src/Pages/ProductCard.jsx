import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = ({ product }) => {
  const navigate=useNavigate()
  const {
    name,
    price,
    stock,
    material,
    image,
    dimensions,
    id,
    description,
    category,
  } = product;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-out duration-150">
        <figure className="h-48 overflow-hidden">
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div
              className={`badge  badge-xs py-3 ${
                stock ? "badge-success" : "bg-red-600 border-0"
              }`}
            >
              {stock ? "available" : "not available"}
            </div>
          </h2>
          <p>Category : {category}</p>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge border-0 bg-purple-300 font-bold">
              ${price}
            </div>
            <div
              onClick={() => navigate(`/productDetails/${id}`)}
              className="btn btn-secondary"
            >
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;