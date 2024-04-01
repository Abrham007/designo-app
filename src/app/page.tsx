import CharacterItem from "@/components/HomePage/CharacterItem";
import MainFooter from "@/components/MainFooter/MainFooter";
import illustrationPassionate from "../../public/images/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../../public/images/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../public/images/home/desktop/illustration-friendly.svg";
import Image from "next/image";
import leafPattern from "../../public/images/shared/desktop/bg-pattern-leaf.svg";
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

export default function Home() {
  return (
    <main className="relative">
      <Image
        src={leafPattern}
        alt=""
        className="hidden lg:inline-block absolute bottom-[250px] right-0 -z-10 rotate-180"
      ></Image>
      <section className="w-full lg:max-w-[1111px] flex flex-col gap-[120px] lg:mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[108px] lg:mb-[160px] ">
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
        <ul className="flex flex-col lg:flex-row gap-20 lg:gap-[30px]">
          <CharacterItem
            imgSrc={illustrationPassionate}
            title="PASSIONATE"
            description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          ></CharacterItem>
          <CharacterItem
            imgSrc={illustrationResourceful}
            title="RESOURCEFUL"
            description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          ></CharacterItem>
          <CharacterItem
            imgSrc={illustrationFriendly}
            title="FRIENDLY"
            description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          ></CharacterItem>
        </ul>
      </section>
      <MainFooter></MainFooter>
    </main>
  );
}
