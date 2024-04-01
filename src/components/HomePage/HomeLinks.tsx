import Link from "@/components/UI/Link/Link";

type ImgSrcObject = {
  [key: string]: any;
};

const imgSrcObject: ImgSrcObject = {
  web: {
    desktop: {
      large: "/images/home/desktop/image-web-design-large.jpg",
      small: "/images/home/desktop/image-web-design-small.jpg",
    },
    tablet: "/images/home/tablet/image-web-design.jpg",
    mobile: "/images/home/mobile/image-web-design.jpg",
  },
  app: {
    desktop: { small: "/images/home/desktop/image-app-design.jpg" },
    tablet: "/images/home/tablet/image-app-design.jpg",
    mobile: "/images/home/mobile/image-app-design.jpg",
  },
  graphic: {
    desktop: { small: "/images/home/desktop/image-graphic-design.jpg" },
    tablet: "/images/home/tablet/image-graphic-design.jpg",
    mobile: "/images/home/mobile/image-graphic-design.jpg",
  },
};

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
