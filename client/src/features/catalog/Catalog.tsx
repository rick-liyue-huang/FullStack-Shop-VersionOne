
import { useEffect, useState } from "react";
import { ProductType } from "../../app/models/product";
import { ProductList } from "./ProductList";

export type CatalogProps = {
  products?: ProductType[];
}
export const Catalog = () => {

  const [products, setProducts] = useState<ProductType[]>([]);
  
  useEffect(() => {
    fetch('https://localhost:5166/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    return () => {
      console.log('cleanup');
    }
  }, []);
  
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
