import AboutHeader from "@/components/AboutPage/AboutHeader";
import AboutInfoItem from "@/components/AboutPage/AboutInfoItem";
import LocationList from "@/components/LocationList/LocationList";
import MainFooter from "@/components/MainFooter/MainFooter";

export default function About() {
  return (
    <main>
      <AboutHeader></AboutHeader>
      <section className="flex flex-col gap-[120px] md:gap-[160px] mb-[120px] md:my-[120px] lg:my-[160px]">
        <AboutInfoItem
          title="World-class talent"
          description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.\n\nOur team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          images={{
            desktop: "/images/about/desktop/image-world-class-talent.jpg",
            tablet: "/images/about/tablet/image-world-class-talent.jpg",
            mobile: "/images/about/mobile/image-world-class-talent.jpg",
          }}
        ></AboutInfoItem>

        <LocationList></LocationList>

        <AboutInfoItem
          title="The real deal"
          description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.\n\nWe are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
          images={{
            desktop: "/images/about/desktop/image-real-deal.jpg",
            tablet: "/images/about/tablet/image-real-deal.jpg",
            mobile: "/images/about/mobile/image-real-deal.jpg",
          }}
        ></AboutInfoItem>
      </section>
      <MainFooter></MainFooter>
    </main>
  );
}
