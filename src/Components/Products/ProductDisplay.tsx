import { Product } from "../../Data/products";

interface Props {
  product: Product;
}

export function ProductDisplay({ product }: Props) {
  return (
    <>
      <div>{product.name}</div>
      <div>{product.category}</div>
    </>
  );
}

export default ProductDisplay;
