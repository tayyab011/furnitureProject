import useProduct from './../hooks/useProduct';
import ProductCard from './ProductCard';


const Products = () => {
    const {products}=useProduct();

    return (
      <div>
        <div className="flex justify-between items-center py-5 px-3">
          <h1 className="md:text-3xl text-xl font-bold  ">All Product</h1>

          <button
            className="btn btn-info hover:scale-110 hover:ease-in-out"
          
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-5 px-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Products;