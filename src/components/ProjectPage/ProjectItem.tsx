import Image from "next/image";
import ProjectItemData from "@/interfaces/projectItem";

export default function ProjectItem({
  title,
  description,
  image,
}: ProjectItemData) {
  return (
    <li className="group cursor-pointer w-[327px] h-[478px] md:w-[689px] md:h-[310px] lg:w-[350px] lg:h-[478px] mx-auto flex flex-col md:flex-row lg:flex-col rounded-[15px] bg-[#FDF3F0] hover:bg-Peach">
      <Image
        src={image}
        alt={title}
        width={700}
        height={654}
        className="w-[327px] md:w-[339px] lg:w-[350px] rounded-t-[15px] md:rounded-none md:rounded-l-[15px] lg:rounded-none lg:rounded-t-[15px]"
      ></Image>
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="w-[277px] text-lg text-Peach group-hover:text-White uppercase">
          {title}
        </h2>
        <p className="w-[277px] text-base text-Black group-hover:text-White ">
          {description}
        </p>
      </div>
    </li>
  );
}
