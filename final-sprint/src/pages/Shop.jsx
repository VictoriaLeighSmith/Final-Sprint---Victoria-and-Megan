import ProductCard from "../components/ProductCard";

const Shop = ({ products }) => {
  return (
    <div>
      <div className="product-cards-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
