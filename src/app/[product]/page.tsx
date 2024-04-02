import MainFooter from "@/components/MainFooter/MainFooter";
import ProductHeader from "@/components/ProductPage/ProductHeader";
import ProductList from "@/components/ProductPage/ProductList";
import Link from "@/components/UI/Link/Link";
import { imgSrcObject } from "@/util/imgSrcObject";

export default function Product() {
  return (
    <main>
      <ProductHeader></ProductHeader>
      <section className="w-full lg:max-w-[1111px] flex flex-col gap-[120px] lg:gap-[160px] lg:mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[108px] lg:mb-[160px] ">
        <ProductList></ProductList>
        <nav>
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-center">
            <li>
              <Link
                href="/"
                title="app design"
                imgSrc={imgSrcObject.app}
              ></Link>
            </li>
            <li>
              <Link
                href="/"
                title="graphic design"
                imgSrc={imgSrcObject.graphic}
              ></Link>
            </li>
          </ul>
        </nav>
      </section>
      <MainFooter></MainFooter>
    </main>
  );
}
