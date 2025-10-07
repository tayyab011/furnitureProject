import { useEffect, useState } from 'react';
import useProduct from './../hooks/useProduct';
import ProductCard from './ProductCard';


const Products = () => {
    const { products} = useProduct();
  const [notfount,setnotfount]=useState("")
    const [search,setSearch]=useState("")
  const [filteredProducts, setFilteredProducts] = useState(products);
  
    const handleSearch=()=>{


       const remainingSearch = search.trim()===""?products: products.filter((product) =>product.name.toLowerCase().includes(search.toLowerCase()))
setFilteredProducts(remainingSearch);
  if (remainingSearch.length === 0) {
    setnotfount("No result found");
  } else {
    setnotfount("");
  }
   }


    return (
      <div>
        <div className="flex justify-between items-center py-5 px-3">
          <h1 className="md:text-3xl text-xl font-bold  ">
            All Product{" "}
            <span className="text-sm">
              (
              { 
              notfount? 0 :
              filteredProducts.length > 0
                ? filteredProducts.length
                : products.length}
              ) product found
            </span>
          </h1>

          <div className="flex">
            <label className="input">
              <input
              className='grow'
                value={search}
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search products"
              />
            </label>
            <button onClick={handleSearch} className="btn ">
              Search
            </button>
          </div>
        </div>
        {notfount ? <p>{notfount}</p> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-5 px-3">
          {(filteredProducts.length > 0 ? filteredProducts : products).map(
            (product) => (
              <ProductCard key={product.id} product={product} />
            )
          )}

       
        </div>}
      </div>
    );
};

export default Products;