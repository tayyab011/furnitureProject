import React from 'react';

const ProductCard = ({ product }) => {
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
              className={`badge  ${
                stock ? "badge-success" : "badge-secondary"
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
            <div className="btn btn-secondary">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;