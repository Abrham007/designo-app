import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <ul className="flex flex-col gap-10">
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </ul>
  );
}
