import { useEffect, useState } from "react";

export type ProductType = {
  name: string;
  price: number;
}

function App() {

  const [products, setProducts] = useState<ProductType[]>([]);

  const addProduct = () => {
    setProducts(prev => [...prev, {name: 'grape' + prev.length, price: (prev.length + 1)*100}]);
  }

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
      hello
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product.name}>
                {product.name} - {product.price}
              </li>
            )
        }
        )}
      </ul>
      <button onClick={addProduct}>Add</button>
    </>
  )
}

export default App
