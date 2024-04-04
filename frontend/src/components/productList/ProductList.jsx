import ProductCard from "@/components/productList/productCards/ProductCard";
import ProductModal from "@/components/productList/productCards/ProductModal";
const ProductList = ({ productList }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {productList &&
            productList.map((product) => (
              <>
                <ProductCard product={product} />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
