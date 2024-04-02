import Link from "@/components/UI/Link/Link";
import { imgSrcObject } from "@/util/imgSrcObject";

export default function HomeLinks() {
  return (
    <nav>
      <ul className="flex flex-col gap-6 items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[30px] lg:gap-y-6">
        <li className="lg:row-start-1 lg:row-end-3">
          <Link
            href="/"
            title="web design"
            imgSrc={imgSrcObject.web}
            large={true}
            className="lg:w-[541px] lg:h-[640px]"
          ></Link>
        </li>
        <li>
          <Link href="/" title="app design" imgSrc={imgSrcObject.app}></Link>
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
  );
}
