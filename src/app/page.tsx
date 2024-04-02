import MainFooter from "@/components/MainFooter/MainFooter";
import Image from "next/image";
import leafPattern from "../../public/images/shared/desktop/bg-pattern-leaf.svg";
import CharacterList from "@/components/HomePage/CharacterList";
import HomeLinks from "@/components/HomePage/HomeLinks";
import HomeHeader from "@/components/HomePage/HomeHeader";

export default function Home() {
  return (
    <main className="relative">
      <Image
        src={leafPattern}
        alt=""
        className="hidden lg:inline-block absolute bottom-[250px] right-0 -z-10 rotate-180"
      ></Image>
      <HomeHeader></HomeHeader>
      <section className="w-full lg:max-w-[1111px] flex flex-col gap-[120px] lg:gap-[160px] lg:mx-auto px-6 md:px-10 lg:px-0 mb-[120px] md:mb-[108px] lg:mb-[160px] ">
        <HomeLinks></HomeLinks>
        <CharacterList></CharacterList>
      </section>
      <MainFooter></MainFooter>
    </main>
  );
}
