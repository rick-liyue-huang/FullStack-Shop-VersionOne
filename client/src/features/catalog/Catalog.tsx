
import { ProductType } from "../../app/models/product";
import { ProductList } from "./ProductList";

type CatalogProps = {
  products: ProductType[];
}
export const Catalog = ({products}: CatalogProps) => {
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
