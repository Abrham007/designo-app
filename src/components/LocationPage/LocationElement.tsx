import Image from "next/image";

export default function LocationElement() {
  return (
    <li>
      <Image src="" alt=""></Image>
      <div>
        <h2 className="lg:w-[445px] text-[2rem] leading-[2.25rem] font-medium text-Peach md:text-xl">
          Canada
        </h2>

        <div className="text-center md:text-start">
          <p className="text-base text-White font-bold opacity-50">
            Designo Central Office
          </p>
          <p className="text-base text-White opacity-50">
            3886 Wellington Street
          </p>
          <p className="text-base text-White opacity-50">
            Toronto, Ontario M9C 3J5
          </p>
        </div>

        <div className="text-center md:text-start">
          <p className="text-base text-White font-bold opacity-50">
            Contact Us (Central Office)
          </p>
          <p className="text-base text-White opacity-50">P : +1 253-863-8967</p>
          <p className="text-base text-White opacity-50">
            M : contact@designo.co
          </p>
        </div>
      </div>
    </li>
  );
}
