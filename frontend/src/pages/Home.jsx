import * as shad from "@/components/ui/shadBarrel";
import ProductList from "@/components/productList/ProductList";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";
import ProductCard from "@/components/productList/productCards/ProductCard";


const Home = () => {
  const [productList, setProductList] = useState(null);
  const aNumber = 12;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET_REQUEST("/api/products/");
        if (response.data) {
          console.log(response.data);
          setProductList(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <>{productList && <ProductList {...{ productList }} />}</>
    </>
  );
};

export default Home;