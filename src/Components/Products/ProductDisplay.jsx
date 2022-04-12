import PropTypes from "prop-types";

export function ProductDisplay({ product }) {
  return (
    <>
      <div>{product.name}</div>
      <div>{product.category}</div>
    </>
  );
}

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default ProductDisplay;
