import ProductDisplay from "./ProductDisplay";

import { Product } from "../../Data/products";

interface Props {
  products: Product[];
}

export default function ProductsList({ products }: Props) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
  );
}
