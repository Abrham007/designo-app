import Image from "next/image";
import Button from "../UI/Buttons/Button";
import Link from "next/link";

export default function LocationItem({
  id,
  country,
  className,
  image,
}: {
  id: string;
  country: string;
  className: string;
  image: string;
}) {
  return (
    <li className="flex flex-col gap-12 items-center">
      <div
        className={`w-[202px] h-[202px] rounded-full ${className} from-LightGrey to-White`}
      >
        <Image src={image} alt={country} width={202} height={202}></Image>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <h3 className="text-lg text-Black uppercase">{country}</h3>
        <Link
          href={`/location#${id}`}
          className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-White hover:text-White bg-Peach hover:bg-LightPeach rounded-lg"
        >
          SEE LOCATION
        </Link>
      </div>
    </li>
  );
}
