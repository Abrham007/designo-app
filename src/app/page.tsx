import CharacterItem from "@/components/HomePage/CharacterItem";
import MainFooter from "@/components/MainFooter/MainFooter";
import illustrationPassionate from "../../public/images/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../../public/images/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../public/images/home/desktop/illustration-friendly.svg";
import Image from "next/image";
import leafPattern from "../../public/images/shared/desktop/bg-pattern-leaf.svg";

export default function Home() {
  return (
    <main className="relative">
      <Image
        src={leafPattern}
        alt=""
        className="hidden lg:inline-block absolute bottom-[250px] right-0 -z-10 rotate-180"
      ></Image>
      <section className="w-full lg:max-w-[1111px] lg:mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[108px] lg:mb-[160px] ">
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
