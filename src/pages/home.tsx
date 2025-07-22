import React, { useEffect } from 'react';
import { useProductsService } from '../services/products.service';
import ProductCart from 'components/productCart';
import { useDispatch } from 'react-redux';
import { setProducts } from 'stores/products';

const Home = () => {
  const { products, loading, error, getAllProducts } = useProductsService();
  const dispatch = useDispatch()
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if(products?.length > 0) {
      dispatch(setProducts(products!)) 
    }
  }, [products, dispatch])

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-5">List Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;