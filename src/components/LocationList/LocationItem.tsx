import Image from "next/image";
import Button from "../UI/Buttons/Button";

export default function LocationItem({
  country,
  className,
  image,
}: {
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
        <Button $type="2">SEE LOCATION</Button>
      </div>
    </li>
  );
}
