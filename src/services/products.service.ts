// src/services/products.service.ts
import { useCallback, useState } from 'react';
import { useHttp } from './http.service';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export function useProductsService() {
  const http = useHttp();

  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const getAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await http.get<Product[]>('https://fakestoreapi.com/products');
      setProducts(data);
      console.log('Data', data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [http])

  // useEffect(() => {
  //   if(products) {
  //     console.log('Update data', products);
      
  //   }
  // }, [products])

  return {
    getAllProducts,
    products,
    loading,
    error
  };
}