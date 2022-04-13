import { useProductsData } from "../Data/products";
import ProductsList from "../Components/Products/ProductsList";
import Spinner from "../Services/Spinner/index";

export default function Home() {
  const { products, loading } = useProductsData();
  if (loading) return <Spinner />;
  return <ProductsList products={products}></ProductsList>;
}
