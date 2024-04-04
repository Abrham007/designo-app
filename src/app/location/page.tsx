import LocationElement from "@/components/LocationPage/LocationElement";
import MainFooter from "@/components/MainFooter/MainFooter";

export default function Location() {
  return (
    <main>
      <ul className="w-full lg:max-w-[1111px] lg:mx-auto  mb-[120px] lg:mb-[160px] flex flex-col gap-10 md:gap-[120px] lg:gap-[32px]">
        <LocationElement
          id="canada"
          name="Canada"
          office={{
            name: "Central Office",
            street: "3886 Wellington Street",
            city: "Toronto, Ontario",
            postCode: "M9C 3J5",
          }}
          contact={{ phone: "+1 253-863-8967", email: "contact@designo.co" }}
          images={{
            desktop: "/images/locations/desktop/image-map-canada.png",
            tablet: "/images/locations/tablet/image-map-canada.png",
          }}
        ></LocationElement>
        <LocationElement
          id="australia"
          name="Australia"
          office={{
            name: "AU Office",
            street: "19 Balonne Street",
            city: "New South Wales",
            postCode: "2443",
          }}
          contact={{ phone: "(02) 6720 9092", email: "contact@designo.au" }}
          images={{
            desktop: "/images/locations/desktop/image-map-australia.png",
            tablet: "/images/locations/tablet/image-map-australia.png",
          }}
        ></LocationElement>
        <LocationElement
          id="united-kingdom"
          name="United Kingdom"
          office={{
            name: "UK Office",
            street: "13 Colorado Way",
            city: "Rhyd-y-fro",
            postCode: "SA8 9GA",
          }}
          contact={{ phone: "078 3115 1400", email: "contact@designo.uk" }}
          images={{
            desktop: "/images/locations/desktop/image-map-uk.png",
            tablet: "/images/locations/tablet/image-map-uk.png",
          }}
        ></LocationElement>
      </ul>
      <MainFooter></MainFooter>
    </main>
  );
}
