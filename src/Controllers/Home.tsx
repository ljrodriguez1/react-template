import { useProductsData } from "../Data/products";
import ProductsList from "../Components/Products/ProductsList";

export default function Home() {
  const { products } = useProductsData();

  return <ProductsList products={products}></ProductsList>;
}
