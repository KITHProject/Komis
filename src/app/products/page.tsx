'use client'
import { ProductPage } from "@/components/Product/ProductPage";
import { fetchProducts } from "@/utils/actions/product";
import { useQuery } from "react-query";

export default function Products() {
  
  const { isLoading, error, data } = useQuery('carouselData', () => fetchProducts());

  if(data){
    return (
      <>
        <ProductPage products={data}/>
      </>
    )
  }

  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
