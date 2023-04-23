import { useParams } from "react-router-dom";
import Product from "../../components/product";
import Loading from "../../components/ui/Loading";
import useHttp from "../../hooks/useHttp";
import { TextExtraLarge } from "../../components/typography";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProductContainer() {
  const { productId } = useParams();

  console.log("productId before useEffect", productId);

  useEffect(() => {
    console.log("useEffect called");
    console.log("productId", productId);
  }, [productId]);

  console.log("productId after useEffect", productId);

  // const { isLoading, error, data } = useHttp("/get/products/" + productId);

  // if (error) {
  //   return (
  //     <TextExtraLarge
  //       type="md"
  //       className={"t-bold mt-5 text-danger text-center"}
  //     >
  //       {error}
  //     </TextExtraLarge>
  //   );
  // }

  // if (isLoading) {
  //   return <Loading />;
  // }

  // const {
  //   isLoading: isLoadingSimilarProducts,
  //   error: errorSimilarProducts,
  //   data: similarProducts,
  // } = useHttp("/get/products?category=" + data?.category, "GET");

  // console.log("productId", productId);

  return (
    <Product
      productId={productId}
      // productData={data}
      isSimilarProductsLoading={false}
      similarProducts={[]}
    />
  );
}
