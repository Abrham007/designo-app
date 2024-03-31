import Image, { StaticImageData } from "next/image";

export default function CharacterItem({
  imgSrc,
  title,
  description,
}: {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col gap-12 items-center">
      <Image src={imgSrc} alt=""></Image>
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-lg text-Black">{title}</h2>
        <p className="text-base text-Black">{description}</p>
      </div>
    </li>
  );
}
