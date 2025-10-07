import React from 'react';
import { useParams } from 'react-router';
import useProduct from '../hooks/useProduct';

const ProductDetails = () => {
    const {id}=useParams()
    const ID=Number(id)
    const { products, loading } = useProduct();
    const filterdProduct = products.find((product) => product.id === ID);
     
   if (loading)
     return (
       <div className="min-h-screen flex justify-center items-center">
         <div className="loading loading-dots loading-xl mx-auto"></div>
       </div>
     );
   
  const {
    name,
    price,
    stock,
    material,
    image,
    dimensions,

    description,
    category,
  } = filterdProduct; 


const addWishList=()=>{
const existingData = JSON.parse(localStorage.getItem("wishlist"));

let fixedData=[];

if (existingData) {
    const exist = existingData.some((p) => p.id === filterdProduct.id);
    if (exist) {
        alert("already exist")
        return
    }
fixedData = [...existingData, filterdProduct];
}/* else{
    fixedData.push(filterdProduct);
} */

     localStorage.setItem("wishlist", JSON.stringify(fixedData));
    
}

    return (
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image}
              className="md:w-[40%] md:h-[300px] object-center   image w-full rounded-lg shadow-2xl"
            />
            <div className="md:w-[50%] w-full">
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{description}</p>
              <button onClick={addWishList} className="btn btn-primary">add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;