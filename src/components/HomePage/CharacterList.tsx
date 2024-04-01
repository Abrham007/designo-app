import CharacterItem from "@/components/HomePage/CharacterItem";
import illustrationPassionate from "../../../public/images/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../../../public/images/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../../public/images/home/desktop/illustration-friendly.svg";

export default function CharacterList() {
  return (
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
  );
}
