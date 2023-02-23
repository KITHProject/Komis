import { ProductPage } from "@/components/Product/ProductPage";
import { fetchProducts } from "@/utils/actions/product";

export default function Products() {
  fetchProducts()
  return (
    <>
      <ProductPage/>
    </>
  );
}
