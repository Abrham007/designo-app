import LocationItem from "./LocationItem";

export default function LocationList() {
  return (
    <ul className="w-full lg:max-w-[1111px] lg:mx-auto flex flex-col lg:flex-row gap-12 md:gap-[58px] lg:justify-between">
      <LocationItem
        country="CANADA"
        className="bg-gradient-to-b"
        image="/images/shared/desktop/illustration-canada.svg"
      ></LocationItem>
      <LocationItem
        country="AUSTRALIA"
        className="bg-gradient-to-r"
        image="/images/shared/desktop/illustration-australia.svg"
      ></LocationItem>
      <LocationItem
        country="UNITED KINGDOM"
        className="bg-gradient-to-t"
        image="/images/shared/desktop/illustration-united-kingdom.svg"
      ></LocationItem>
    </ul>
  );
}
