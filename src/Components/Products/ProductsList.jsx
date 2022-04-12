import ProductDisplay from "./ProductDisplay";

export default function ProductsList({ products }) {
    return (
        <div className="products-list">
            {products.map(product => (
                <ProductDisplay key={product.id} product={product} />
            ))}
        </div>
    );
}