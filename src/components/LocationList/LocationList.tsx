import LocationItem from "./LocationItem";

export default function LocationList() {
  return (
    <ul className="w-full lg:max-w-[1111px] lg:mx-auto flex flex-col lg:flex-row gap-12 md:gap-[58px] lg:justify-between">
      <LocationItem
        id="canada"
        country="canada"
        className="bg-gradient-to-b"
        image="/images/shared/desktop/illustration-canada.svg"
      ></LocationItem>
      <LocationItem
        id="australia"
        country="australia"
        className="bg-gradient-to-r"
        image="/images/shared/desktop/illustration-australia.svg"
      ></LocationItem>
      <LocationItem
        id="united-kingdom"
        country="united kingdom"
        className="bg-gradient-to-t"
        image="/images/shared/desktop/illustration-united-kingdom.svg"
      ></LocationItem>
    </ul>
  );
}
